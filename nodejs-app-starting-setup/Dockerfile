FROM node:14.18

COPY . ./app

WORKDIR /app

RUN npm install

# 实际上这玩意只是个声明 没用
EXPOSE 80

CMD [ "node", "server.js" ]

# 因为每个容器都会单独运行 npm install，导致依赖重复安装，浪费存储空间。此外，如果启动多个容器，它们之间的依赖安装也不会共享
# CMD ["/bin/sh", "-c", "npm install && node server.js"] 
