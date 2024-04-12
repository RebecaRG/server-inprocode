# Backend Juegos de Mesa 🧩

Backend desarrollado con Express y Sequelize para la aplicación de juegos de mesa, complementando el frontend en `sprint-8`. Utiliza TypeScript y dotenv para una configuración eficiente y segura.

## 🛠 Configuración Rápida

### 📋 Requisitos

- **Node.js**
- **MySQL** (Configurado con PHPMyAdmin)
- **Nodemon** (Instala usando `npm install -g nodemon` si no lo tienes)
- **Sequelize** (Instala usando `npm install sequelize` si no lo tienes)

### 🚀 Pasos 

1. Clona y navega al repo:
   - `git clone <url_del_repositorio_backend>`
   - `cd <directorio_del_proyecto>`

2. Instala dependencias: `npm install`

3. Compila el código TypeScript a JavaScript: `npx tsc`

4. Inicia con Nodemon: `nodemon dist/index.js`

### Configuración de la Base de Datos

- Abre PHPMyAdmin y crea una nueva base de datos llamada `juegos_de_mesa`.
- Importa el archivo `juegos_de_mesa.sql` dentro de esta base de datos utilizando la función de importación en PHPMyAdmin.

## 📁 Estructura de Archivos Importantes

Dentro de la carpeta sql del repositorio, encontrarás el archivo `juegos_de_mesa.sql`. Este archivo es crucial para configurar tu entorno de desarrollo local. Contiene todas las instrucciones SQL necesarias para crear las tablas de la base de datos y, opcionalmente, cargar datos de muestra. Asegúrate de importarlo a tu base de datos local para comenzar a desarrollar con una estructura de datos predefinida.

## 🔧 Tecnologías 

- **Express & Sequelize**: Para la API y la gestión de la base de datos.
- **TypeScript**: Mejora la experiencia de desarrollo con tipado estático.
- **Dotenv**: Gestiona variables de entorno de manera segura.

## 📡 Despliegue

La aplicación se ejecuta en `localhost:3000` por defecto. Si necesitas correr la aplicación en un puerto diferente, puedes cambiar el valor de `PORT` en el archivo `.env`.

## 🤝 Contribuir 

¡Tus ideas para mejorar o expandir son bienvenidas! Crea un pull request o abre un issue.

