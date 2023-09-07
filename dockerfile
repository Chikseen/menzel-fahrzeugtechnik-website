# Dockerfile
FROM node:19-alpine3.16

# create destination directory
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

# update and install dependency
RUN apk update && apk upgrade

# copy the app, note .dockerignore
COPY . /usr/src/nuxt-app/
ENV IPX_MAX_AGE="31536000"

RUN npm install --ignore-scripts=false --verbose sharp
RUN npm rebuild --platform=linux --arch=x64 sharp
RUN npm rebuild --platform=linux --arch=arm64 sharp
RUN npm install
RUN npm run build


EXPOSE 3000

CMD [ "node", "/usr/src/nuxt-app/.output/server/index.mjs" ]