FROM node:20-alpine

WORKDIR /app

RUN apk add --no-cache curl

COPY package.json package-lock.json* ./
RUN npm install --include=dev

COPY . .

RUN npm run build

CMD ["npm", "run", "start"]