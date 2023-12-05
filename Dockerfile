# Utiliza la imagen de Node.js 20.10.0 como base
FROM node:20.10.0

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos del proyecto al directorio de trabajo
COPY . .

# Instala la versión específica de npm
RUN npm install -g npm@10.2.4

# Instala Angular CLI
RUN npm install -g @angular/cli@17.0.5

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
