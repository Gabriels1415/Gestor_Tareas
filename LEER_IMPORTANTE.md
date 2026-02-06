# Gestor de Tareas - React + Vite

Profesor tuve un error y lo solucione con IA este es el error que me salio, y aqui la IA se lo especifica:

Proyecto de lista de tareas con persistencia de datos.

### ⚠️ Nota Técnica sobre el Backend
Durante el desarrollo, se detectó que el servicio de la API externa en Render (`https://todolist-api-9ymb.onrender.com`) fue suspendido por el proveedor, devolviendo errores de tipo **CORS** y **503 (Service Unavailable)**. 

Para garantizar que la aplicación sea 100% funcional para la entrega, se han implementado las siguientes soluciones:
1. **Persistencia Local:** Se integró lógica de `localStorage` para que las tareas se guarden en el navegador.
2. **Vite Proxy:** Se dejó configurado el proxy en `vite.config.js` para facilitar la reconexión inmediata una vez que el servicio externo sea restablecido.
3. **Manejo de Errores:** El sistema detecta fallos de red sin romper la interfaz de usuario.