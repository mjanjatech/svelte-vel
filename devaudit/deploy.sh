#!/bin/bash

# Deployment script for Scorch AI on VPS with Docker and Portainer

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Function to display messages
print_message() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    print_error "Docker is not installed. Please install Docker first."
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    print_error "Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

# Check if .env file exists
if [ ! -f .env ]; then
    print_error "Environment file not found. Please create a .env file with the required variables."
    exit 1
fi

print_message "Starting deployment of Scorch AI..."

# Load environment variables
source .env

# Check if APP_KEY is set
if [ -z "$APP_KEY" ]; then
    print_warning "APP_KEY not set. Generating a new key..."
    # Build the app image to generate the key
    docker build -t svelte-vel-app ..
    # Run a temporary container to generate the app key
    APP_KEY=$(docker run --rm svelte-vel-app php artisan key:generate --show)
    # Update the .env file with the new key
    sed -i "s/APP_KEY=/APP_KEY=${APP_KEY}/" .env
    print_message "Generated APP_KEY: ${APP_KEY}"
fi

print_message "Creating Docker network..."
docker network create svelte-vel-network 2>/dev/null || true

print_message "Starting containers..."
docker-compose up -d --build

print_message "Waiting for containers to start..."
sleep 15

print_message "Checking container status..."
if ! docker ps --format '{{.Names}}' | grep -q "svelte-vel-app"; then
    print_error "App container failed to start"
    exit 1
fi

print_message "Installing dependencies..."
docker exec svelte-vel-app composer install --no-dev --optimize-autoloader

print_message "Building assets..."
docker exec svelte-vel-app npm install
docker exec svelte-vel-app npm run build

print_message "Running migrations..."
docker exec svelte-vel-app php artisan migrate --seed --force

print_message "Linking storage directory..."
docker exec svelte-vel-app php artisan storage:link

print_message "Clearing cache..."
docker exec svelte-vel-app php artisan config:cache
docker exec svelte-vel-app php artisan route:cache
docker exec svelte-vel-app php artisan view:cache
docker exec svelte-vel-app php artisan event:cache

print_message "Optimizing autoloader..."
docker exec svelte-vel-app composer dump-autoload --optimize

print_message "Deployment complete!"
print_message "Application is now running at: ${APP_URL}"
print_message "PHPMyAdmin is available at: ${APP_URL}:8080"

print_warning "Please ensure you have configured your DNS settings to point to this server's IP address."
