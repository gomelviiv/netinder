FROM node:16-alpine as builder
WORKDIR /app
COPY dist /app/dist
COPY server.js /app/dist/server.js
RUN cd dist
RUN npm install express express-favicon path
RUN node server.js