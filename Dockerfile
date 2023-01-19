FROM node:18-buster
RUN addgroup teams
RUN adduser raj
RUN usermod -a -G teams raj
WORKDIR /app
RUN chmod -R 777 /app
USER raj
COPY / /app
RUN yarn install