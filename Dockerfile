FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json tsconfig.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npx", "ts-node-dev", "--respawn", "--transpile-only", "src/index.ts"]
