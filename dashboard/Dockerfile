#node version
FROM node:8.11.2

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i npm@latest -g --silent
RUN npm install react-scripts@3.0.1 -g --silent
RUN npm install --silent

COPY . .
