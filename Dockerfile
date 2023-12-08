# Utiliza la imagen de Node.js 18.16.1 como base
FROM node:18.16.1

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos del proyecto al directorio de trabajo
COPY . .

# Instala la versión específica de npm
RUN npm install -g npm@9.8.0

# Instala Angular CLI
RUN npm install -g @angular/cli@17.0.6

# Instala las dependencias del proyecto
RUN npm install

# Instala las dependencias adicionales
# RUN npm install ...

# Construye la aplicación para producción
RUN ng build --configuration production

# Utiliza la imagen de Nginx para servir la aplicación
FROM nginx:latest

# Copia los archivos construidos al directorio de Nginx
COPY --from=0 /app/dist/brian-portfolio /usr/share/nginx/html

# Copia tu archivo de configuración de Nginx desde el directorio de trabajo
COPY --from=0 /app/default.conf /etc/nginx/conf.d/default.conf
