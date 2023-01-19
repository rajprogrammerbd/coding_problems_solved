FROM node:18-buster
RUN addgroup teams
RUN adduser raj
RUN usermod -a -G teams raj
USER raj
WORKDIR /app
COPY / /app
RUN yarn install