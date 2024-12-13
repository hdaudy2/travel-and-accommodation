FROM node:alpine As builder

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

ARG VERSION
ENV APP_VERSION=$VERSION

COPY . .

RUN npm run build --prod

FROM nginx:alpine

COPY --from=builder /usr/src/app/dist/travel-and-accommodation/ /usr/share/nginx/html
