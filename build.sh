#!/bin/bash

# Extract version from package.json
VERSION=$(node -p "require('./package.json').version")

# Build Docker image
docker build --build-arg VERSION=$VERSION -t travel-and-accommodation:$VERSION .

echo "Built Docker image with version $VERSION"