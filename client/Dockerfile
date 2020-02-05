  # Specify a base image
FROM node:alpine
WORKDIR /client

# Install some dependencies
COPY ./package.json ./
RUN npm install
COPY ./ ./
EXPOSE 3002

# Default Command
CMD ["npm", "run", "start"]