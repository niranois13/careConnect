FROM node:20

WORKDIR /careConnect

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json /careConnect
COPY pnpm-lock.yaml /careConnect
COPY tsconfig.base.json /careConnect
COPY pnpm-workspace.yaml /careConnect
COPY env.ts /careConnect
COPY apps/web /careConnect/apps/web
COPY apps/web/package.json /careConnect/apps/web 
COPY apps/web/tsconfig.json /careConnect/apps/web 
COPY apps/web/tsconfig.node.json  /careConnect/apps/web/


WORKDIR /careConnect/apps/web

RUN pnpm install --filter web --frozen-lockfile

CMD ["pnpm", "run", "dev"]
