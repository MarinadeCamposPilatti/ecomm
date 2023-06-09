FROM node:18

WORKDIR /app-ecomm

COPY . .

RUN npm install

CMD npm start