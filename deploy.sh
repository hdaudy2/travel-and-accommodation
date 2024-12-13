#!/bin/bash

# Extract version from package.json
VERSION=$(node -p "require('./package.json').version")

# Deploy Docker image
docker run -p 3000:80 --name travel-and-accommodation -d travel-and-accommodation:$VERSION

echo "Deploying Docker image with version $VERSION on port 3000"