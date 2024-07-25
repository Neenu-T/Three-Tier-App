# Use the official Node.js image from the Docker Hub
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build

# Install a simple static server to serve the build files
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 3000

# Serve the application
CMD ["serve", "-s", "build", "-l", "3000"]
