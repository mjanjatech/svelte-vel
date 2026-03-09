@echo off
cls

echo Building Docker image...
docker build -t svelte-vel-app .

echo Starting containers...
docker-compose up -d

echo Waiting for services to start...
timeout /t 10 /nobreak > nul

echo Installing composer dependencies...
docker exec svelte-vel-app composer install

echo Installing npm dependencies and building assets...
docker exec svelte-vel-app npm install
docker exec svelte-vel-app npm run build

echo Generating application key...
docker exec svelte-vel-app php artisan key:generate

echo Running migrations...
docker exec svelte-vel-app php artisan migrate --seed

echo Linking storage directory...
docker exec svelte-vel-app php artisan storage:link

echo Setup complete!
echo Application is now running at http://localhost
echo PHPMyAdmin is available at http://localhost:8080
pause
