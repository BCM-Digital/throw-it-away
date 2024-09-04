# Use Node.js official image from Docker Hub
FROM node:18-alpine

# Create and set the working directory inside the container
WORKDIR /usr/src/app

# Copy the local files to the container
COPY package*.json ./

# Install necessary dependencies
RUN npm install

# Copy all the project files
COPY . .

# Expose the development server on port 8080
EXPOSE 8080

# Run the local development server
CMD ["npm", "start"]