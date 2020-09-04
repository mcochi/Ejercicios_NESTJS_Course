FROM node:12

WORKDIR /microservices

COPY package*.json ./
COPY tsconfig.json tsconfig.json
COPY tsconfig.build.json tsconfig.build.json
COPY src src
RUN ["npm","install","global","@nestjs/cli"]
RUN ["npm", "install"]
RUN ["npm","install","mongoose"]

EXPOSE 3000

ENTRYPOINT ["npm","run","start"]