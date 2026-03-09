<?php

declare(strict_types=1);

namespace App\Jobs;

use App\Models\Critique;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Spatie\Browsershot\Browsershot;
use Illuminate\Support\Facades\Storage;

class TakeScreenshotsJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public function __construct(public Critique $critique)
    {
    }

    public function handle(): void
    {
        try {
            // Check if URL is valid
            if (empty($this->critique->url) || $this->critique->url === 'new-project.local') {
                logger()->info('Skipping screenshots: Invalid URL for critique ' . $this->critique->id);
                return;
            }

            $nodePath = 'C:\Program Files\nodejs\node.exe';
            $npmPath = 'C:\Program Files\nodejs\npm.ps1';
            // Take desktop screenshot with longer timeout
            $desktopScreenshot = Browsershot::url($this->critique->url)
                ->setNodeBinary($nodePath)
                ->setNpmBinary($npmPath)
                // IMPORTANT FOR WINDOWS: Chrome sometimes needs help finding itself
                ->setChromePath('C:\Program Files\Google\Chrome\Application\chrome.exe') 
                ->windowSize(1920, 1080)
                ->waitUntilNetworkIdle()
                ->screenshot();
            $desktopPath = 'screenshots/' . $this->critique->id . '_desktop.png';
            Storage::disk('public')->put($desktopPath, $desktopScreenshot);

            // Update critique with desktop screenshot path
            $this->critique->update(['desktop_screenshot' => Storage::url($desktopPath)]);

            // Take mobile screenshot with longer timeout
            $mobileScreenshot = Browsershot::url($this->critique->url)
                ->windowSize(375, 667)
                ->timeout(60) // 60 seconds timeout
                ->waitUntilNetworkIdle()
                ->screenshot();

            $mobilePath = 'screenshots/' . $this->critique->id . '_mobile.png';
            Storage::disk('public')->put($mobilePath, $mobileScreenshot);

            // Update critique with mobile screenshot path
            $this->critique->update(['mobile_screenshot' => Storage::url($mobilePath)]);

        } catch (\Exception $e) {
            logger()->error('Error taking screenshots for critique ' . $this->critique->id . ': ' . $e->getMessage());
        }
    }
}
