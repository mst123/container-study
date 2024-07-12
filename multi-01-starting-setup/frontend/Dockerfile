FROM node:14

WORKDIR /app

COPY package.json .

VOLUME [ "/app/node_modules" ]

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]