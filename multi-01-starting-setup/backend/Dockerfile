FROM node:14

WORKDIR /app

COPY ./package.json .

RUN npm install

COPY . .

ENV MONGODB_USERNAME mst

ENV MONGODB_PWD clannad123

EXPOSE 80

CMD [ "node", "app.js" ]