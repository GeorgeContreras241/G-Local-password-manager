# Gestor Local de Contraseñas

Un gestor de contraseñas local y seguro desarrollado con React y Next.js.

## Características

- 📝 Almacenamiento local de contraseñas
- 🔒 Encriptación de datos
- 🔄 Generación de contraseñas seguras
- 🔍 Búsqueda de contraseñas
- 📋 Copiado rápido al portapapeles
- 🔄 Actualización de contraseñas
- 🗑️ Eliminación segura
- 📱 Interfaz responsiva
- 🎨 Diseño moderno y atractivo
- 🛡️ Notificaciones en tiempo real

## Requisitos

- Node.js (versión 16 o superior)
- npm o yarn

## Instalación

1. Clona el repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
cd GestorLocal
```

2. Instala las dependencias:
```bash
npm install
# o
yarn install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Tecnologías Utilizadas

- React 18
- Next.js
- TypeScript
- Tailwind CSS
- React Hot Toast
- Context API
- Local Storage

## Estructura del Proyecto

```
src/
├── app/
│   ├── context/
│   │   └── PasswordsContext.jsx
│   ├── lib/
│   │   └── alert/
│   │       └── alert.js
│   └── passwords/
│       └── page.jsx
├── components/
│   ├── PasswordForm/
│   ├── PasswordList/
│   └── PasswordCard/
└── styles/
    └── globals.css
```

## Seguridad

- Las contraseñas se almacenan encriptadas localmente
- Cada contraseña tiene un ID único
- Validación de datos antes de almacenar
- Sistema de notificaciones para errores y operaciones exitosas

## Contribución

1. Crea un fork del proyecto
2. Crea una rama para tu función (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre una Pull Request

## Licencia

Este proyecto está bajo la licencia MIT - consulta el archivo [LICENSE](LICENSE) para más detalles.

## Soporte

Para reportar bugs o sugerir nuevas características, por favor abre un issue en el repositorio.

## Autor

- **[Tu Nombre]** - [Tu Email]

## Agradecimientos

- React y Next.js equipos
- React Hot Toast
- Tailwind CSS
- Todas las personas que contribuyen al proyecto
