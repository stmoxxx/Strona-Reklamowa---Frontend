FROM node:18-alpine

WORKDIR /usr/appfront
COPY ./ /usr/appfront
RUN npm install

COPY ./package.json ./usr/src/appfront/package.json

RUN npm install --save-dev @babel/plugin-proposal-private-property-in-object --legacy-peer-deps

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
