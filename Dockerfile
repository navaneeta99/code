FROM node:14

WORKDIR /
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 18080
CMD [ "node", "server.js" ]