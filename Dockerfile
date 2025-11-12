FROM node:20-alpine

# Variables de entorno
ENV NODE_ENV=production
ENV PORT=3000

# Directorio de trabajo
WORKDIR /app

# Instalar dependencias (solo prod)
COPY package*.json ./
RUN npm ci --omit=dev

# Copiar el código
COPY server.js ./

# Usar usuario no root
USER node

# Exponer el puerto
EXPOSE 3000

# Comando de arranque
CMD ["node", "server.js"]
