FROM node:14
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app
RUN npm run build
EXPOSE 8081
CMD [ "node", "stream.js" ]

