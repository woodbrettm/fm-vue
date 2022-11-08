# https://github.com/nodejs/docker-node
FROM node:18

# Helps With Hot Reloading
ENV CHOKIDAR_USEPOLLING=true

# This Requires Node >= v16.17.0
RUN corepack prepare pnpm@latest --activate
RUN npm install -g pnpm@7.14.2
