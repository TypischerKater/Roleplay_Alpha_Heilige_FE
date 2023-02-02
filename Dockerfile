FROM node:16.14-alpine as build
WORKDIR /usr/local/app
COPY package.json /usr/local/app
COPY package-lock.json /usr/local/app
RUN npm ci
COPY ./ /usr/local/app/
RUN npm run build:prod

FROM nginx:latest
COPY --from=build /usr/local/app/dist/roleplay_alpha_heilige /usr/share/nginx/html/roleplay_alpha_heilige
COPY build/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
