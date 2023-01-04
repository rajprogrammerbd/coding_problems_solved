FROM node:19.3.0-alpine3.17
WORKDIR /app
COPY . . 
RUN npm install
ENV API_URL=http://www.google.com
EXPOSE 3000
RUN addgroup app && adduser -S -G app app
USER app