# Use Node.js official image from Docker Hub
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Expose the port
EXPOSE 3000

# Start the Express.js server
CMD ["npm", "start"]