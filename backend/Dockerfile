# Specify a base image
FROM node:alpine
WORKDIR /backend

# Install some dependencies
COPY ./package.json ./
RUN npm install
COPY ./ ./
EXPOSE 3001

# Default Command
CMD ["npm", "start"]