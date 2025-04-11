FROM node:23-slim

WORKDIR /careConnect

COPY package.json /careConnect
COPY pnpm-lock.yaml /careConnect
COPY tsconfig.base.json /careConnect
COPY pnpm-workspace.yaml /careConnect
COPY env.ts /careConnect

RUN apt-get update -y && apt-get install -y openssl
RUN npm install -g pnpm nodemon
RUN pnpm install --frozen-lockfile

COPY apps/server /careConnect/apps/server

EXPOSE 3000