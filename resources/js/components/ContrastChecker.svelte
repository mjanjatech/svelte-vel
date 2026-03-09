<script lang="ts">
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Label } from '@/components/ui/label';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

    import { Contrast } from 'lucide-svelte';

    // Reactive state for the two colors
    let color1 = '#000000';
    let color2 = '#FFFFFF';

    // Calculate WCAG contrast ratio
    function calculateContrast(color1: string, color2: string): number {
        const rgb1 = hexToRgb(color1);
        const rgb2 = hexToRgb(color2);

        if (!rgb1 || !rgb2) return 0;

        const lum1 = getLuminance(rgb1);
        const lum2 = getLuminance(rgb2);

        const lighter = Math.max(lum1, lum2);
        const darker = Math.min(lum1, lum2);

        return (lighter + 0.05) / (darker + 0.05);
    }

    // Convert hex color to RGB
    function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    // Calculate relative luminance
    function getLuminance(rgb: { r: number; g: number; b: number }): number {
        const a = [rgb.r, rgb.g, rgb.b].map(function (v) {
            v /= 255;
            return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
        });
        return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
    }

    // Get WCAG compliance level
    function getComplianceLevel(contrast: number): { level: string; text: string; color: string } {
        if (contrast >= 7) {
            return { level: 'AAA', text: 'Perfect (AAA)', color: 'text-green-600' };
        }
        if (contrast >= 4.5) {
            return { level: 'AA', text: 'Good (AA)', color: 'text-blue-600' };
        }
        if (contrast >= 3) {
            return { level: 'AA Large', text: 'AA Large', color: 'text-yellow-600' };
        }
        return { level: 'Fail', text: 'Fail', color: 'text-red-600' };
    }

    // Generate random color
    function generateRandomColor(): string {
        return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    }

    // Calculate text color for given background
    function getTextColor(background: string): string {
        const rgb = hexToRgb(background);
        if (!rgb) return '#000000';

        // Calculate relative luminance
        const luminance = getLuminance(rgb);
        
        return luminance > 0.179 ? '#000000' : '#FFFFFF';
    }

    $: contrastRatio = calculateContrast(color1, color2);
    $: compliance = getComplianceLevel(contrastRatio);
    $: textColor1 = getTextColor(color1);
    $: textColor2 = getTextColor(color2);
</script>

<div class="space-y-8">
    <!-- Color Selection -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
            <CardHeader>
                <CardTitle class="flex items-center gap-2">
                    <Contrast class="size-5" />
                    Foreground Color
                </CardTitle>
            </CardHeader>
            <CardContent class="space-y-4">
                <div class="flex items-center gap-4">
                    <input 
                        type="color" 
                        bind:value={color1} 
                        class="w-16 h-16 rounded cursor-pointer border-0 p-0"
                    />
                    <div class="flex-1">
                        <Label for="color1">Color 1 (Foreground)</Label>
                        <Input 
                            id="color1" 
                            type="text" 
                            bind:value={color1} 
                            class="mt-1 font-mono text-sm"
                            placeholder="#000000"
                        />
                    </div>
                </div>
                <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => color1 = generateRandomColor()}
                >
                    Random Color
                </Button>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle class="flex items-center gap-2">
                    <Contrast class="size-5" />
                    Background Color
                </CardTitle>
            </CardHeader>
            <CardContent class="space-y-4">
                <div class="flex items-center gap-4">
                    <input 
                        type="color" 
                        bind:value={color2} 
                        class="w-16 h-16 rounded cursor-pointer border-0 p-0"
                    />
                    <div class="flex-1">
                        <Label for="color2">Color 2 (Background)</Label>
                        <Input 
                            id="color2" 
                            type="text" 
                            bind:value={color2} 
                            class="mt-1 font-mono text-sm"
                            placeholder="#FFFFFF"
                        />
                    </div>
                </div>
                <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => color2 = generateRandomColor()}
                >
                    Random Color
                </Button>
            </CardContent>
        </Card>
    </div>

    <!-- Contrast Result -->
    <Card>
        <CardHeader>
            <CardTitle>Contrast Analysis</CardTitle>
        </CardHeader>
        <CardContent class="space-y-6">
            <!-- Visual Preview -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div 
                    class="h-32 rounded-lg flex items-center justify-center"
                    style="background-color: {color1}; color: {textColor1};"
                >
                    <div class="text-center">
                        <p class="text-sm font-medium">Color 1 on Color 2</p>
                        <p class="text-2xl font-bold">Aa</p>
                    </div>
                </div>
                <div 
                    class="h-32 rounded-lg flex items-center justify-center"
                    style="background-color: {color2}; color: {textColor2};"
                >
                    <div class="text-center">
                        <p class="text-sm font-medium">Color 2 on Color 1</p>
                        <p class="text-2xl font-bold">Aa</p>
                    </div>
                </div>
            </div>

            <!-- Contrast Ratio -->
            <div class="text-center space-y-2">
                <p class="text-sm text-muted-foreground">Contrast Ratio</p>
                <p class="text-4xl font-bold">{contrastRatio.toFixed(2)}:1</p>
                <p class={`text-lg font-medium ${compliance.color}`}>{compliance.text}</p>
            </div>

            <!-- WCAG Standards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="rounded-lg border p-4">
                    <p class="text-sm font-semibold mb-1">WCAG 2.1 AA</p>
                    <p class="text-xs text-muted-foreground">
                        Normal text: 4.5:1<br />
                        Large text: 3:1
                    </p>
                </div>
                <div class="rounded-lg border p-4">
                    <p class="text-sm font-semibold mb-1">WCAG 2.1 AAA</p>
                    <p class="text-xs text-muted-foreground">
                        Normal text: 7:1<br />
                        Large text: 4.5:1
                    </p>
                </div>
                <div class="rounded-lg border p-4">
                    <p class="text-sm font-semibold mb-1">Large Text</p>
                    <p class="text-xs text-muted-foreground">
                        18pt+ or 14pt bold<br />
                        Easier to read
                    </p>
                </div>
            </div>

            <!-- Accessibility Guidelines -->
            <div class="space-y-3">
                <h3 class="text-sm font-semibold">Accessibility Guidelines</h3>
                <div class="space-y-2 text-sm text-muted-foreground">
                    <p>• Aim for at least 4.5:1 for normal text</p>
                    <p>• 7:1 or higher is recommended for better accessibility</p>
                    <p>• Ensure good contrast for all text, especially small text</p>
                    <p>• Test with different screen sizes and color modes</p>
                </div>
            </div>
        </CardContent>
    </Card>
</div>
