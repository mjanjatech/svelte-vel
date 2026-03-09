#!/bin/bash

# Restore script for Scorch AI

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

# Check if backup file is provided
if [ $# -eq 0 ]; then
    print_error "Please provide a backup file to restore"
    print_message "Usage: $0 <backup-file.tar.gz>"
    exit 1
fi

BACKUP_FILE=$1

# Check if backup file exists
if [ ! -f $BACKUP_FILE ]; then
    print_error "Backup file not found: $BACKUP_FILE"
    exit 1
fi

# Load environment variables
if [ -f .env ]; then
    source .env
else
    print_error "Environment file not found"
    exit 1
fi

# Create temporary directory for extraction
TEMP_DIR="./tmp-restore"
mkdir -p $TEMP_DIR

print_message "Extracting backup: $BACKUP_FILE"
tar xzf $BACKUP_FILE -C $TEMP_DIR

# Check if extraction was successful
if [ $? -ne 0 ]; then
    print_error "Failed to extract backup"
    rm -rf $TEMP_DIR
    exit 1
fi

# Get the first directory in the temporary directory
BACKUP_DIR=$(ls -1 $TEMP_DIR | head -1)

print_message "Restoring from: $TEMP_DIR/$BACKUP_DIR"

# Stop the app container to prevent interference
print_message "Stopping app container..."
docker stop svelte-vel-app

# Restore database
print_message "Restoring database..."
if docker exec -i svelte-vel-mysql mysql -u root -p${DB_PASSWORD} ${DB_DATABASE} < $TEMP_DIR/$BACKUP_DIR/database.sql; then
    print_message "Database restored successfully"
else
    print_error "Failed to restore database"
    docker start svelte-vel-app
    rm -rf $TEMP_DIR
    exit 1
fi

# Restore storage directory
print_message "Restoring storage directory..."
if docker cp $TEMP_DIR/$BACKUP_DIR/storage svelte-vel-app:/var/www/html/; then
    print_message "Storage directory restored successfully"
else
    print_error "Failed to restore storage directory"
    docker start svelte-vel-app
    rm -rf $TEMP_DIR
    exit 1
fi

# Set permissions on the restored files
print_message "Setting permissions..."
docker exec svelte-vel-app chown -R www-data:www-data /var/www/html/storage
docker exec svelte-vel-app chmod -R 755 /var/www/html/storage

# Start the app container
print_message "Starting app container..."
docker start svelte-vel-app

# Clear cache
print_message "Clearing cache..."
docker exec svelte-vel-app php artisan cache:clear
docker exec svelte-vel-app php artisan config:clear
docker exec svelte-vel-app php artisan route:clear
docker exec svelte-vel-app php artisan view:clear

# Cleanup
rm -rf $TEMP_DIR

print_message "Restore complete"
