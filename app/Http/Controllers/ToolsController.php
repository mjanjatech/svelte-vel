<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Vips\Driver as VipsDriver;
use Intervention\Image\Drivers\Imagick\Driver as ImagickDriver;
use Intervention\Image\Drivers\Gd\Driver as GdDriver;
use Illuminate\Support\Facades\Http;

class ToolsController extends Controller
{
    /**
     * Show the contrast checker page.
     */
    public function contrastChecker()
    {
        return Inertia::render('Tools/ContrastChecker');
    }

    /**
     * Show the DNS lookup page.
     */
    public function dnsLookup()
    {
        return Inertia::render('Tools/DNSLookup');
    }

    /**
     * Perform DNS lookup.
     */
    public function performDnsLookup(Request $request)
    {
        $request->validate([
            'domain' => 'required|string|domain',
        ]);

        $domain = $request->input('domain');
        
        // In a real application, you would use PHP's dns_get_record() function
        // or a DNS library. For this example, we'll use a mock response.
        $records = $this->mockDnsRecords($domain);
        
        return response()->json($records);
    }

    /**
     * Mock DNS records for demonstration purposes.
     */
    private function mockDnsRecords($domain)
    {
        return [
            'A' => [
                ['value' => '93.184.216.34', 'ttl' => 86400],
            ],
            'AAAA' => [
                ['value' => '2606:2800:220:1:248:1893:25c8:1946', 'ttl' => 86400],
            ],
            'MX' => [
                ['value' => 'mx.example.com', 'ttl' => 3600],
            ],
            'NS' => [
                ['value' => 'ns1.example.com', 'ttl' => 172800],
                ['value' => 'ns2.example.com', 'ttl' => 172800],
            ],
            'TXT' => [
                ['value' => 'v=spf1 include:_spf.example.com ~all', 'ttl' => 3600],
            ],
        ];
    }

    /**
     * Resolve the best available image driver.
     */
    private function getImageManager(): ImageManager
    {
        if (extension_loaded('ffi')) {
            return new ImageManager(new VipsDriver());
        } 
        
        if (extension_loaded('imagick')) {
            return new ImageManager(new ImagickDriver());
        }

        return new ImageManager(new GdDriver());
    }

    public function optimizeImage(Request $request)
    {
        $request->validate([
            'image' => 'required|image|max:10240', // 10MB limit
        ]);

        $file = $request->file('image');
        $originalSize = $file->getSize();

        try {
            // 1. Get the manager instance using our fallback logic
            $manager = $this->getImageManager();

            // 2. Read the image from the temporary path
            $image = $manager->read($file->getRealPath());
            
            // 3. Encode to JPEG with 80% quality (Best balance for web)
            $encoded = $image->toJpeg(80);

            // 4. Extract binary data and calculate size
            $optimizedBinary = $encoded->toString();
            $optimizedSize = strlen($optimizedBinary);
            
            // 5. Calculate compression ratio
            $compressionRatio = 100 - round(($optimizedSize / $originalSize) * 100);

            // 6. Return response with Base64 data for immediate UI preview
            return response()->json([
                'optimized_image' => 'data:image/jpeg;base64,' . base64_encode($optimizedBinary),
                'original_size' => $this->formatBytes($originalSize),
                'optimized_size' => $this->formatBytes($optimizedSize),
                'compression_ratio' => max(0, $compressionRatio) . '%',
                'driver_used' => $manager->driver()::class // Useful for debugging
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Optimization failed: ' . $e->getMessage()
            ], 500);
        }
    }

    /**
     * Human-readable file sizes
     */
    private function formatBytes($bytes, $precision = 2): string
    {
        $units = ['B', 'KB', 'MB', 'GB'];
        $pow = floor(($bytes ? log($bytes) : 0) / log(1024));
        $pow = min($pow, count($units) - 1);
        $bytes /= pow(1024, $pow);
        return round($bytes, $precision) . ' ' . $units[$pow];
    }
}