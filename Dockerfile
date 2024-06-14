FROM node:20.14.0

WORKDIR /app

COPY . .

RUN npm install

RUN npm install -g typescript

RUN npm run build

EXPOSE 8080

CMD ["npm", "run", "prod"]