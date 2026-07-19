#!/bin/bash

set -e

echo "📥 Pulling latest changes..."
git pull

echo "📦 Installing dependencies..."
npm install

echo "🧹 Cleaning previous build..."
rm -rf .next

echo "🏗️ Building application..."
npm run build

echo "🚀 Restarting application..."
pm2 restart cookiesensei

echo "✅ Deployment completed successfully!"