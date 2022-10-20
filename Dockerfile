# FROM node:18-alpine3.16 AS build
# WORKDIR /StudyApp/src/app
# COPY package.json package-lock.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# FROM nginx:latest
# COPY --from=build /StudyApp/src/app/dist/study-app /usr/share/nginx/html

# EXPOSE 80
FROM node:18-alpine3.16 AS build
WORKDIR /usr/source/repos/StudyApp/StudyApp/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
COPY ./ /usr/source/repos/StudyApp/StudyApp/src/app/
RUN npm install
RUN npm run build

FROM nginx:latest
COPY --from=build /usr/source/repos/StudyApp/StudyApp/src/app/dist/study-app /usr/share/nginx/html

EXPOSE 80