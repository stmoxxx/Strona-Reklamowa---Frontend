FROM node:18-alpine

WORKDIR /usr/appfront
COPY ./ /usr/appfront
RUN npm install

COPY ./package.json ./usr/src/appfront/package.json

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
