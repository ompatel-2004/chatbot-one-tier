# Simple Nginx server serving static HTML/CSS/JS
FROM nginx:alpine

# Copy your static website into nginx html directory
COPY . /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

