FROM node:16-alpine AS build

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY tsconfig*.json ./

COPY . ./

RUN yarn build && yarn install --frozen-lockfile --production

FROM node:16-alpine AS dist

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/node_modules ./node_modules

COPY --from=build /usr/src/app/dist ./

VOLUME [ "/usr/src/app/data" ]

EXPOSE 3000

CMD [ "node", "main.js" ]
