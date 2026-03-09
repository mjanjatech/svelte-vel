#!/bin/bash

# Build the Docker image
echo "Building Docker image..."
docker build -t svelte-vel-app .

# Start the containers
echo "Starting containers..."
docker-compose up -d

# Wait for services to start
echo "Waiting for services to start..."
sleep 10

# Install composer dependencies
echo "Installing composer dependencies..."
docker exec svelte-vel-app composer install

# Install npm dependencies and build assets
echo "Installing npm dependencies and building assets..."
docker exec svelte-vel-app npm install
docker exec svelte-vel-app npm run build

# Generate application key
echo "Generating application key..."
docker exec svelte-vel-app php artisan key:generate

# Run migrations
echo "Running migrations..."
docker exec svelte-vel-app php artisan migrate --seed

# Link storage directory
echo "Linking storage directory..."
docker exec svelte-vel-app php artisan storage:link

echo "Setup complete!"
echo "Application is now running at http://localhost"
echo "PHPMyAdmin is available at http://localhost:8080"
