FROM node:10.15.3-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json ./package.json

# For docker / cycle
RUN npm install
RUN npm install -g nodemon --silent

COPY . /usr/src/app

EXPOSE 8080
CMD ["npm", "start"]