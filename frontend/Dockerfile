FROM node:10.15.3

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ADD package.json ./package.json

# For docker / cycle
RUN npm install

# RUN npm install -g react-scripts --silent

COPY . /usr/src/app

EXPOSE 3000
CMD ["npm", "start"]