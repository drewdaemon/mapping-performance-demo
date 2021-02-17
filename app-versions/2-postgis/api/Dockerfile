FROM node:14.15.5-alpine

WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .
RUN npm install

COPY . .

CMD ["npm", "start"]