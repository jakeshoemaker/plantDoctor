# pull from base image
FROM node:10.21.0

# set working directory
WORKDIR /app

# add `/app/bin/node_modules/.bin to path
ENV PATH /app/node_modules/.bin:$PATH

# install dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install 
RUN npm install react-scripts@3.4.1 -g

# add app
COPY . ./

# start app
CMD ["npm", "start"]
CMD ["node", "server.js"]
