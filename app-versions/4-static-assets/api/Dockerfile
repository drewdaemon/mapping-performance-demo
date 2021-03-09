FROM alpine:3.8

RUN apk add openrc --no-cache

# Install nginx - reference https://wiki.alpinelinux.org/wiki/Nginx
RUN apk add nginx

RUN adduser -D -g 'www' www
RUN mkdir /www
RUN chown -R www:www /var/lib/nginx
RUN chown -R www:www /www

# Create the directory for nginx's nginx.pid file
RUN mkdir /var/run/nginx
RUN chown -R www:www /var/lib/nginx

# Install Node and NPM
ENV ALPINE_MIRROR "http://dl-cdn.alpinelinux.org/alpine"
RUN echo "${ALPINE_MIRROR}/edge/main" >> /etc/apk/repositories
RUN apk add --no-cache nodejs-current  --repository="http://dl-cdn.alpinelinux.org/alpine/edge/community"
RUN apk add npm

COPY ./nginx.conf /etc/nginx/nginx.conf

# Set up node app
WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .
RUN npm install

COPY . .

CMD nginx && npm start