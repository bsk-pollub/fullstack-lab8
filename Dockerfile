FROM node:alpine
ENV NODE_OPTIONS=--openssl-legacy-provider
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=0 /app/dist/frontend /usr/share/nginx/html