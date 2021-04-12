# pull official base image
FROM node:13.12.0-alpine

# set current working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./

COPY package-lock.json ./

RUN npm install

RUN npm install react-scripts@4.0.3 -g

COPY . ./

# start app
CMD ["npm", "start"]