FROM node:18

RUN mkdir /app-ecomm

WORKDIR /app-ecomm

COPY ./ /app-ecomm

RUN npm install

CMD npm start