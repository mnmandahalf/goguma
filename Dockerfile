FROM node:13.12.0-alpine3.11
WORKDIR /app
RUN npm install --save prop-types
RUN npm install -g create-react-app