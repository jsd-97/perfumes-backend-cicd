FROM node

EXPOSE 3000

WORKDIR /usr/share/app

COPY . .

RUN npm i

CMD ["npm", "run", "start"]