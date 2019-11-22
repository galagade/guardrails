#node version

FROM node:8.11.2

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i npm@latest -g --silent
RUN npm install -g nodemon --silent
RUN npm install --silent

COPY . .

EXPOSE 8080
