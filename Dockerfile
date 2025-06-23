FROM node:22-alpine AS base
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@9.4.0 --activate

COPY turbo.json ./
COPY pnpm-lock.yaml ./
COPY package.json ./
COPY apps/site/package.json ./apps/site/
COPY packages/*/package.json ./packages/*/

RUN pnpm install --frozen-lockfile

# Копируем исходники ПОСЛЕ установки зависимостей
COPY . .

RUN pnpm turbo run build
