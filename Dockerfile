FROM nginx
LABEL name = 'vue-front'
LABEL version = '1.0'
COPY ./docs/.vuepress/dist /usr/share/nginx/html
COPY ./vue-front.conf /etc/nginx/conf.d
EXPOSE 80
