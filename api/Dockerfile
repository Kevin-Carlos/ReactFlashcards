FROM node:10.15.3-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json ./package.json

# For docker / cycle
RUN npm install

COPY . /usr/src/app

# RUN npm install -g nodemon --silent

EXPOSE 5000
CMD ["npm", "start"]