# Use official Node.js 20 Alpine image for smaller size
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install --production

# Copy all source files
COPY . .

# Build Next.js app (standalone mode)
RUN npm run build

# Expose the port that Cloud Run or local Docker will use
EXPOSE 8080

# Set environment variable for port
ENV PORT=8080

# Start the standalone server
CMD ["node", ".next/standalone/server.js"]