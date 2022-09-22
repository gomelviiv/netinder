FROM node:16-alpine as builder
WORKDIR /app
COPY dist /app/dist
RUN npm install -g serve
ENTRYPOINT ["serve", "-l", "9000", "-s", "dist"]