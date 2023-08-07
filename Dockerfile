# Stage 1: Build angular image
FROM node:latest AS build

WORKDIR /app

COPY ./ /app

RUN npm install

RUN npm run build

# Stage 2: Build and host nginx server
FROM nginx:latest

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/dist/planner /usr/share/nginx/html/

EXPOSE 80