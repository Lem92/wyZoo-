FROM node:alpine
WORKDIR /app
ADD ./ /app
RUN npm i
RUN npm i -g serve bower gulp-cli
RUN bower install --allow-root
RUN gulp build
CMD serve dist