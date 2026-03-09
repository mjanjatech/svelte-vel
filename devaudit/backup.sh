#!/bin/bash

# Backup script for Scorch AI

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

# Load environment variables
if [ -f .env ]; then
    source .env
else
    print_error "Environment file not found"
    exit 1
fi

# Create backup directory
BACKUP_DIR="./backups/$(date +%Y%m%d_%H%M%S)"
mkdir -p $BACKUP_DIR

print_message "Creating backup in: $BACKUP_DIR"

# Backup database
print_message "Backing up database..."
if docker exec svelte-vel-mysql mysqldump -u root -p${DB_PASSWORD} ${DB_DATABASE} > $BACKUP_DIR/database.sql; then
    print_message "Database backup complete"
else
    print_error "Failed to backup database"
fi

# Backup storage directory
print_message "Backing up storage directory..."
if docker cp svelte-vel-app:/var/www/html/storage $BACKUP_DIR; then
    print_message "Storage backup complete"
else
    print_error "Failed to backup storage directory"
fi

# Backup configuration files
print_message "Backing up configuration files..."
cp .env $BACKUP_DIR
cp docker-compose.yml $BACKUP_DIR
cp -r nginx $BACKUP_DIR

# Compress the backup
print_message "Compressing backup..."
tar czf $BACKUP_DIR.tar.gz -C $(dirname $BACKUP_DIR) $(basename $BACKUP_DIR)

# Remove uncompressed backup
rm -rf $BACKUP_DIR

# Clean up old backups (keep last 7 days)
print_message "Cleaning up old backups..."
find ./backups -type f -name "*.tar.gz" -mtime +7 -delete

print_message "Backup complete: $BACKUP_DIR.tar.gz"
