<?php

require_once __DIR__.'/vendor/autoload.php';

use App\Models\Critique;
use App\Jobs\AnalyzePageSpeedJob;

$app = require __DIR__.'/bootstrap/app.php';

$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

$critique = Critique::create([
    'url' => 'https://google.com',
    'user_id' => null,
    'status' => 'processing',
    'score' => null,
    'results' => null,
]);

AnalyzePageSpeedJob::dispatch($critique);

echo "Job dispatched for critique id: " . $critique->id;
