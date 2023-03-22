FROM node:lts-buster
RUN addgroup teams
RUN useradd -m raj
RUN usermod -s /bin/bash raj
RUN usermod -a -G teams raj
RUN mkdir app
RUN cd app
WORKDIR /app
COPY *package*json /app
RUN yarn install
COPY . /app
RUN chown -c -R raj /app
USER raj
EXPOSE 3000
ENTRYPOINT [ "yarn", "run", "test" ]