# base image
FROM node:10.15.2-alpine as builder

# set working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# add node modules to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# copy project to build directory and build
COPY ./client/package.json .
RUN npm config set unsafe-perm true
RUN npm install 
RUN npm install -g @angular/cli@1.7.1

# copy the rest of the project over
COPY ./client .

# production build
RUN npm run build

FROM nginx

# copy app over
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

# copy nginx config over
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

RUN cat /etc/nginx/nginx.conf

EXPOSE 8080
