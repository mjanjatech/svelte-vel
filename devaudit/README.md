# Scorch AI Deployment Guide

This guide will help you install Scorch AI on a VPS with Docker and Portainer.

## Prerequisites

- VPS with Ubuntu/Debian Linux
- Docker installed
- Docker Compose installed
- Portainer installed (optional but recommended for container management)
- Domain name pointing to your VPS IP address

## Step 1: Prepare the Environment

### 1.1 Connect to your VPS

SSH into your VPS:

```bash
ssh root@your-server-ip
```

### 1.2 Create the project directory

```bash
mkdir -p ~/devaudit
cd ~/devaudit
```

### 1.3 Clone the repository

```bash
git clone your-git-repository-url .
```

## Step 2: Configure the Application

### 2.1 Update Environment Variables

Copy the example environment file and edit it:

```bash
cp .env.example .env
nano .env
```

Update the following variables:

```env
# App Configuration
APP_URL=http://your-domain.com
APP_KEY=

# Database Configuration
DB_DATABASE=sveltevel
DB_USERNAME=sveltevel
DB_PASSWORD=your-strong-database-password

# Redis Configuration
REDIS_PASSWORD=your-strong-redis-password

# Mail Configuration
MAIL_MAILER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_FROM_ADDRESS="hello@your-domain.com"
MAIL_FROM_NAME="Scorch AI"
```

### 2.2 Update Nginx Configuration

Edit the Nginx configuration file:

```bash
nano nginx/conf.d/default.conf
```

Update the `server_name` directives with your domain:

```nginx
server_name your-domain.com www.your-domain.com;
```

## Step 3: Deploy the Application

### 3.1 Run the Deployment Script

Make the deployment script executable and run it:

```bash
chmod +x deploy.sh
./deploy.sh
```

The script will:
1. Check prerequisites
2. Build Docker images
3. Start containers
4. Install dependencies
5. Run migrations
6. Build assets
7. Optimize the application

### 3.2 Verify Deployment

Check if all containers are running:

```bash
docker ps
```

You should see the following containers:
- svelte-vel-app (PHP application)
- svelte-vel-nginx (web server)
- svelte-vel-mysql (database)
- svelte-vel-redis (cache)
- svelte-vel-phpmyadmin (database management)

## Step 4: Access the Application

### 4.1 Frontend

Open your browser and navigate to:
`http://your-domain.com`

### 4.2 PHPMyAdmin

Access PHPMyAdmin at:
`http://your-domain.com:8080`

Credentials:
- Username: `root`
- Password: The value of `DB_PASSWORD` from your .env file

## Step 5: Secure the Application

### 5.1 Enable HTTPS

We recommend using Let's Encrypt to get a free SSL certificate. You can use Certbot:

```bash
# Install Certbot
sudo apt update
sudo apt install certbot python3-certbot-nginx

# Obtain and install the certificate
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# Enable auto-renewal
sudo systemctl enable certbot.timer
```

### 5.2 Update Nginx Configuration

Uncomment and update the SSL configuration in `nginx/conf.d/default.conf`:

```nginx
server {
    listen 443 ssl http2;
    server_name your-domain.com www.your-domain.com;
    root /var/www/html/public;
    index index.php index.html index.htm;

    ssl_certificate /etc/letsencrypt/live/your-domain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/your-domain.com/privkey.pem;
    ssl_trusted_certificate /etc/letsencrypt/live/your-domain.com/chain.pem;

    # ... existing configuration ...
}
```

Reload Nginx to apply the changes:

```bash
docker exec svelte-vel-nginx nginx -s reload
```

## Step 6: Maintenance

### 6.1 Updating the Application

To update the application:

```bash
# Pull the latest changes
git pull

# Re-run the deployment script
./deploy.sh
```

### 6.2 Monitoring Logs

View application logs:

```bash
docker logs svelte-vel-app
```

View Nginx logs:

```bash
docker logs svelte-vel-nginx
```

View database logs:

```bash
docker logs svelte-vel-mysql
```

### 6.3 Backing Up Data

Backup the database:

```bash
docker exec svelte-vel-mysql mysqldump -u root -p your-database-name > backup.sql
```

Backup uploaded files:

```bash
docker exec svelte-vel-app tar czf /tmp/storage.tar.gz storage
docker cp svelte-vel-app:/tmp/storage.tar.gz .
```

## Troubleshooting

### Common Issues

1. **Containers failing to start**: Check the container logs: `docker logs container-name`
2. **Database connection errors**: Verify the .env file has the correct database credentials
3. **Assets not loading**: Ensure the assets are built and permissions are set correctly
4. **500 Internal Server Error**: Check the application logs and storage permissions

### Reverting to Development

To run the application in development mode:

```bash
# Stop production containers
docker-compose down

# Copy development environment variables
cp ../.env .env

# Start development containers
docker-compose up -d
```

## Support

If you encounter any issues, please check the logs first or reach out to the development team.
