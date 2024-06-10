# Stage 1: Build the application
FROM node:16 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Stage 2: Create the production image
FROM node:16-alpine

WORKDIR /app

COPY --from=build /app /app

EXPOSE 3000

CMD ["node", "index.js"]
