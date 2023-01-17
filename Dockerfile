FROM node:18-buster
RUN addgroup teams && adduser raj
WORKDIR /app
COPY package*.json /
RUN npm install
COPY / /
ENV API_URL=http://www.google.com
EXPOSE 3000
ENTRYPOINT [ "yarn", "run", "no-coverage-test" ]