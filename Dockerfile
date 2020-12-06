# Base image
FROM node:14

MAINTAINER Ueli Kunz <kunz@ideadapt.net>

# Set dir in container
WORKDIR /usr/src

# Coppy package files into container
COPY package*.json ./
COPY .env ./

# Install dependencies
RUN npm install --production

# Copy all files in Dockerfile dir to current workdir (/app) in container
COPY --chown=node:node . .

# Build the client application
RUN npm run build

# Make port accessible from outside the container
EXPOSE 1234

# Start process in container: static http web server serving dist folder on port 1234
CMD ["./node_modules/.bin/http-server", "dist", "--port", "1234"]
