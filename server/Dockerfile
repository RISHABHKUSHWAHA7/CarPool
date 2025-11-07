# Node.js backend Dockerfile
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --only=production

# Copy application source code
COPY . .

# Expose the port the app runs on
EXPOSE 8000

# Set environment to production
ENV NODE_ENV=production

# Start the application
CMD ["npm", "start"]
