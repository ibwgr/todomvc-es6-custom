# Base image. 1st stage. node:14. Fixed at specific commit hash. Hashes can not be overriden (in contrast to a tag).
FROM node@sha256:922f9cbc7d960750d3db015e7520f41957130caf8bd16138b29f518aa4ba43a7 as build

# Set directory in container. All following commands run relative to /usr/src
WORKDIR /usr/src

# Copy package files into container
COPY package*.json ./
# Copy file with configuration and secrets.
COPY .env ./

# Node and many packages recognizes this variable. May result in better performance / less overhead at runtime
ENV NODE_ENV production

# Install production dependencies only.
RUN npm install --production

# Copy all (not ignored by .dockerignore) files in Dockerfile directory to current workdir (/usr/src) in container
# chown (Change Owner) sets the owner and group of each copied file to node (user) and node (group).
COPY --chown=node:node . .

# Build the client application
RUN npm run build

# Base image. 2nd stage. very slim, minimalistic httpd based static webserver. Much smaller final image size.
FROM lipanski/docker-static-website:2.1.0
MAINTAINER Ueli Kunz <kunz@ideadapt.net>

# run application as user node
WORKDIR /usr/src

ENV NODE_ENV production

# copy files from build state to current workdir
COPY --from=build /usr/src/dist .
COPY httpd.conf .

# Make port accessible from outside the container
EXPOSE 1234

# Start process in container: static http web server serving /usr/src folder on port 1234
CMD ["/busybox", "httpd", "-f", "-v", "-p", "1234", "-c", "httpd.conf"]
