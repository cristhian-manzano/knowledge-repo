FROM node:16.14.0

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .
