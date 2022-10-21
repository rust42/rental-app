FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY src ./src
COPY public ./public
COPY .env.production ./
COPY .env.development ./
RUN npm install \
     && npm run build \
     && npm install -g serve
ENTRYPOINT [ "serve", "-s", "build" ]