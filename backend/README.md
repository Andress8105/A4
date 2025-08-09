# HTML & CSS Academy - Backend API

Backend API para la plataforma educativa HTML & CSS Academy.

## 🚀 Características

- **Autenticación JWT** segura
- **Base de datos MongoDB Atlas**
- **Encriptación de contraseñas** con bcrypt
- **Rate limiting** para seguridad
- **Validación completa** de datos
- **Gestión de progreso** del usuario
- **API RESTful** bien estructurada

## 📋 Requisitos

- Node.js 16+
- MongoDB Atlas (o MongoDB local)
- npm o yarn

## 🛠️ Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Configurar variables de entorno:
```bash
cp .env.example .env
```

3. Editar el archivo `.env` con tus configuraciones:
```env
MONGODB_URI=tu_url_de_mongodb
JWT_SECRET=tu_jwt_secret_super_seguro
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

## 🚀 Ejecución

### Desarrollo
```bash
npm run dev
```

### Producción
```bash
npm start
```

## 📚 Endpoints de la API

### Autenticación
- `POST /api/auth/register` - Registro de usuarios
- `POST /api/auth/login` - Inicio de sesión
- `GET /api/auth/me` - Obtener usuario actual
- `POST /api/auth/logout` - Cerrar sesión
- `PUT /api/auth/change-password` - Cambiar contraseña

### Usuarios
- `GET /api/users/profile` - Perfil del usuario
- `PUT /api/users/profile` - Actualizar perfil
- `PUT /api/users/progress` - Actualizar progreso
- `GET /api/users/stats` - Estadísticas del usuario
- `GET /api/users/leaderboard` - Tabla de líderes

### Utilidades
- `GET /api/health` - Estado del servidor
- `GET /` - Información de la API

## 🗄️ Modelo de Datos

### Usuario
```javascript
{
  name: String,
  email: String (único),
  password: String (encriptado),
  role: 'user' | 'admin',
  isActive: Boolean,
  lastLogin: Date,
  progress: {
    htmlLessons: Number (0-25),
    cssLessons: Number (0-20),
    completedProjects: Array,
    certificates: Array
  },
  preferences: {
    theme: 'light' | 'dark',
    notifications: Boolean,
    language: String
  },
  createdAt: Date,
  updatedAt: Date
}
```

## 🔒 Seguridad

- ✅ Encriptación de contraseñas con bcrypt (cost: 12)
- ✅ Tokens JWT con expiración de 7 días
- ✅ Rate limiting en rutas de autenticación
- ✅ Validación de datos de entrada
- ✅ Middleware de seguridad con Helmet
- ✅ CORS configurado correctamente
- ✅ Verificación de usuarios activos

## 🧪 Testing

```bash
# Ejecutar tests (cuando estén implementados)
npm test
```

## 📝 Variables de Entorno

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `MONGODB_URI` | URL de conexión a MongoDB | `mongodb+srv://user:pass@cluster.mongodb.net/db` |
| `JWT_SECRET` | Clave secreta para JWT | `mi_clave_super_secreta` |
| `PORT` | Puerto del servidor | `5000` |
| `NODE_ENV` | Entorno de ejecución | `development` |
| `FRONTEND_URL` | URL del frontend para CORS | `http://localhost:5173` |

## 🚀 Despliegue

### Heroku
1. Crear app en Heroku
2. Configurar variables de entorno
3. Conectar repositorio
4. Deploy automático

### Railway/Render
1. Conectar repositorio
2. Configurar variables de entorno
3. Deploy automático

## 📊 Monitoreo

El endpoint `/api/health` proporciona información sobre:
- Estado del servidor
- Conexión a la base de datos
- Timestamp actual
- Entorno de ejecución

## 🤝 Contribución

1. Fork del proyecto
2. Crear rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia ISC.