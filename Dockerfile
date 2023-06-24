FROM node:18

WORKDIR /app-ecomm

COPY . /app-ecomm

RUN npm init

RUN npm install nodemon -g  

COPY ./package.json /app-ecomm/package.json    

EXPOSE 3030

CMD ["npm", "start"]