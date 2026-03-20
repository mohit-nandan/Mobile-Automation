# Use a Node base image
FROM node:20-slim

# Install system dependencies for Appium and canvas (if needed)
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Command to run tests
CMD ["npm", "run", "wdio"]
