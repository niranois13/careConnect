FROM node:23-slim

WORKDIR /careConnect

COPY package.json /careConnect
COPY pnpm-lock.yaml /careConnect
COPY tsconfig.base.json /careConnect
COPY pnpm-workspace.yaml /careConnect

RUN npm install -g pnpm nodemon
RUN pnpm install --frozen-lockfile

COPY apps/server /careConnect/apps/server

EXPOSE 3000