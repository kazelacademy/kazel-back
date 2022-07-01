FROM node:16-alpine

RUN apk update && apk add tzdata && apk add bash

RUN TZ=America/Argentina/Buenos_Aires && cp /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone && apk del tzdata

# WORKDIR /usr/src/app
WORKDIR /app

ENV PORT 3000
EXPOSE 3000

COPY package*.json .

# RUN npm install --omit=dev
RUN npm i

COPY . .

CMD [ "npm", "start" ]
