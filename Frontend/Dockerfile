# pull official base image
FROM node:lts-alpine3.15

# set working directory
WORKDIR /app

# Installs all node packages
RUN npm install

# Copies everything over to Docker environment
COPY . .

# Server app configuration (the React.js app)
ARG PORT
ENV PORT=$PORT

# Build for production.
RUN npm run build --omit=dev

# Install `serve` to run the application.
RUN npm install -g serve

# Uses port which is used by the actual application
EXPOSE ${PORT}

# Run application
CMD serve -s build -l ${PORT}