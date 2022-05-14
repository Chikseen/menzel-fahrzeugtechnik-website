FROM node:16
WORKDIR /app
COPY package*.json /app/
RUN npm install bcrypt@5.0.1
RUN apt update && apt install -y python
RUN npm install
RUN npm i npm-run-all -D
COPY . /app
EXPOSE 7080
EXPOSE 7081
RUN npm run start