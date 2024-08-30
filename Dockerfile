FROM node:18-alpine

WORKDIR /appf

COPY ./package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]


#FROM node:10
##Create app directory
#WORKDIR /app
#COPY abc/package*.json ./
#RUN ls -al
#RUN npm install
#CMD ["npm","start"]