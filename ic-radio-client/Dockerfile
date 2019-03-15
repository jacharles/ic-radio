# base image
FROM alpine:3.7

# set working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# add node modules to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install npm and node
RUN apk add --update nodejs nodejs-npm

# copy project to build directory and build
COPY package.json .
RUN npm install 
RUN npm install -g @angular/cli@1.7.1

# copy the rest of the project over
COPY . .

EXPOSE 4200

# run the app in the container
CMD [ "ng", "serve", "--host", "0.0.0.0" ]

###### need to install python before installing angular

