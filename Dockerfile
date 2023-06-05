FROM node:18

RUN mkdir /app-ecomm

WORKDIR /app-ecomm

COPY . .

RUN npm install

CMD npm start