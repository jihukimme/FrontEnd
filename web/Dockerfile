# Nginx 공식 이미지를 기반으로 새 이미지 생성
FROM nginx

# 로컬에서 빌드한 결과물을 /usr/share/nginx/html 으로 복사합니다.
COPY ./dist /usr/share/nginx/html

# custom 설정파일을 컨테이너 내부로 복사합니다.
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# 컨테이너의 80번 포트를 열어줍니다.
EXPOSE 80

# nginx 서버를 실행하고 백그라운드로 동작하도록 합니다.
CMD ["nginx", "-g", "daemon off;"]