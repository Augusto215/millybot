FROM nginx:1.27-alpine

# Ajusta o servidor padrão para escutar na porta 4567.
RUN sed -i -E 's/listen\s+80;/listen 4167;/' /etc/nginx/conf.d/default.conf \
    && sed -i -E 's/listen\s+\[::\]:80;/listen [::]:4167;/' /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html
COPY . .

EXPOSE 4167

CMD ["nginx", "-g", "daemon off;"]
