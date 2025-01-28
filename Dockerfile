# Step 1: Use the official Node.js image to build the backend
FROM node:alpine3.18 AS backend-build

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock) to install dependencies
COPY package*.json ./

# Install the dependencies
RUN npm install

# Step 2: Copy the rest of the backend files and build the application
COPY . .

# Expose the port the backend will run on
EXPOSE 3000

# Command to run the backend application
CMD ["npm", "run", "start"]
