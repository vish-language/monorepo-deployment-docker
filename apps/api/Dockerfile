FROM node:20-alpine
WORKDIR /app
COPY apps/api/package.json ./package.json
COPY apps/api/index.js ./index.js
EXPOSE 3000
CMD ["node", "index.js"]
