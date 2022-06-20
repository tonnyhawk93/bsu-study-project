FROM node:14

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

COPY ["./front/package.json", "./front/package-lock.json", "./front/"]


RUN npm run install:all

COPY . .

RUN npm run build 

CMD ["npm", "start"]
