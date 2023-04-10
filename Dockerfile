# Build App
FROM node:16-alpine as app
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Expose App
FROM nginx:latest
COPY --from=app /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]