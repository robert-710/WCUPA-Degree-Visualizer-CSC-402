# Use an official Node.js runtime as the base image
FROM node:18-alpine AS builder

# Set working directory inside the container
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy application files
COPY . .

# Build the Next.js application
RUN npm run build

# Use a minimal runtime image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app ./

# Expose the port Next.js runs on
EXPOSE 3000

# Command to start the application
CMD ["npm", "run", "start"]
