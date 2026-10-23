FROM node:20-alpine
WORKDIR /app
COPY apps/web/package.json ./package.json
COPY apps/web/index.js ./index.js
EXPOSE 3001
CMD ["node", "index.js"]
