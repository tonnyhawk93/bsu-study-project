FROM node:16

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY ./front/package.json .
COPY ./front/package-lock.json .

RUN npm run install:all

COPY . .

RUN npm run build 

CMD ["npm", "start"]
