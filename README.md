# Hello Microservice

Microservicio de ejemplo desarrollado con Node.js y Express que expone un endpoint `/hello` para saludar.

## 📋 Descripción

Este microservicio proporciona un endpoint simple que responde con un saludo personalizado. Es ideal como punto de partida para proyectos más complejos o como ejemplo de arquitectura de microservicios.

## 🚀 Características

- Endpoint REST `/hello` con parámetro opcional `name`
- Respuestas en formato JSON
- Dockerizado y listo para producción
- Configuración mediante variables de entorno

## 📦 Requisitos Previos

- **Node.js**: versión 20 o superior
- **npm**: versión 9 o superior (incluido con Node.js)
- **Docker** (opcional): versión 20 o superior (si deseas ejecutar con Docker)

## 🛠️ Instalación y Ejecución

### Opción 1: Ejecución Local (Desarrollo)

1. **Clonar el repositorio** (si aplica):
   ```bash
   git clone https://github.com/OmanFerrer/dmc-ms-hello
   cd dmc-ms-hello
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo** (con nodemon para recarga automática):
   ```bash
   npm run dev
   ```

   O ejecutar en modo producción:
   ```bash
   npm start
   ```

4. **Verificar que el servidor está corriendo**:
   El servidor estará disponible en `http://localhost:3000`

### Opción 2: Ejecución con Docker

#### Construir la imagen:
```bash
docker build -t hello-microservice .
```

#### Ejecutar el contenedor:
```bash
docker run -d -p 3000:3000 --name hello-ms hello-microservice
```

#### Ejecutar con variables de entorno personalizadas:
```bash
docker run -d -p 3000:3000 -e PORT=3000 --name hello-ms hello-microservice
```

#### Ver logs del contenedor:
```bash
docker logs hello-ms
```

#### Detener el contenedor:
```bash
docker stop hello-ms
```

#### Eliminar el contenedor:
```bash
docker rm hello-ms
```

## 📡 Uso del API

### Endpoint: GET /hello

Saluda con un nombre personalizado o con "mundo" por defecto.

**URL**: `http://localhost:3000/hello`

**Parámetros de consulta (query parameters)**:
- `name` (opcional): Nombre a saludar. Si no se proporciona, usa "mundo" por defecto.

**Ejemplos de uso**:

```bash
# Saludo por defecto
curl http://localhost:3000/hello

# Saludo personalizado
curl http://localhost:3000/hello?name=Juan

# Desde el navegador
http://localhost:3000/hello?name=María
```

**Respuesta exitosa** (200 OK):
```json
{
  "message": "Hola, Juan!",
  "service": "hello-microservice",
  "timestamp": "2024-01-15T10:30:45.123Z"
}
```

## ⚙️ Variables de Entorno

El microservicio utiliza las siguientes variables de entorno:

| Variable | Descripción | Valor por Defecto |
|----------|-------------|-------------------|
| `PORT` | Puerto en el que escucha el servidor | `3000` |
| `NODE_ENV` | Entorno de ejecución (`development` o `production`) | `production` (en Docker) |

### Configurar variables de entorno localmente:

**Linux/macOS**:
```bash
export PORT=3000
export NODE_ENV=development
npm start
```

**Windows (PowerShell)**:
```powershell
$env:PORT=3000
$env:NODE_ENV="development"
npm start
```

**Windows (CMD)**:
```cmd
set PORT=3000
set NODE_ENV=development
npm start
```

## 📁 Estructura del Proyecto

```
dmc-ms-hello/
├── Dockerfile          # Configuración de Docker
├── package.json        # Dependencias y scripts del proyecto
├── package-lock.json   # Lock file de dependencias
├── server.js          # Código principal del servidor
└── README.md          # Este archivo
```

## 🔧 Scripts Disponibles

- `npm start`: Ejecuta el servidor en modo producción
- `npm run dev`: Ejecuta el servidor en modo desarrollo con nodemon (recarga automática)

## 🐳 Docker

### Detalles de la imagen Docker

- **Imagen base**: `node:20-alpine` (ligera y segura)
- **Usuario**: `node` (no root, por seguridad)
- **Puerto expuesto**: `3000`
- **Modo**: Producción (`NODE_ENV=production`)

### Optimizaciones de la imagen

- Usa Alpine Linux para reducir el tamaño
- Instala solo dependencias de producción (`npm ci --omit=dev`)
- Ejecuta como usuario no privilegiado
- Multi-stage build ready (si se necesita optimizar más)

## 🧪 Pruebas

Para probar el endpoint, puedes usar:

**cURL**:
```bash
curl http://localhost:3000/hello?name=Test
```

**HTTPie**:
```bash
http GET localhost:3000/hello name==Test
```

**Desde el navegador**:
Abre `http://localhost:3000/hello?name=TuNombre` en tu navegador favorito.

---

**Desarrollado como parte del Diplomado DevOps Engineer**

