FROM node:lts-alpine

WORKDIR /usr/src/app
COPY . /usr/src/app

RUN npm i

EXPOSE 8080
CMD ["node", "index.js"]
