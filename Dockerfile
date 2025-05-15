FROM node:22-alpine3.20 AS dev-deps
WORKDIR /app
COPY package.json package.json
RUN npm install


FROM node:22-alpine3.20 AS builder
WORKDIR /app
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .
RUN npm run build


FROM nginx:1.27.5 AS prod
EXPOSE 80
COPY --from=builder /app/dist /usr/share/nginx/html
COPY public/assets/ /usr/share/nginx/html/assets
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
CMD ["nginx", "-g","daemon off;"]
