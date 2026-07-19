#!/bin/bash

set -e

echo "📥 Pulling latest changes..."
git pull

echo "📦 Installing dependencies..."
npm install

echo "🏗️ Building application..."
npm run build

echo "🚀 Restarting application..."
pm2 restart cookiesensei

echo "✅ Deployment completed successfully!"