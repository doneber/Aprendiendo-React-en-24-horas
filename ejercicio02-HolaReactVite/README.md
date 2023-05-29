# Ejercicio02 | Hola React (con Vite)

En este ejercicio ya empezamos a usar un empaquetador, en este caso con la ayuda de Vite.

Para iniciar el proyecto debemos ejecutar el siguiente comando:

```
npm create vite@latest
```

Luego nos pediran elegir una serie de opciones, podemos podemos escoger las que estan por defecto.

## Estructura del proyecto

Ahora tenemos muchos mas archivos, y listaremos rapidamente algunos de ellos:

- `.eslintrc.cjs`: En este archivo estan las configuraciones el lint que usa el proyecto
- `.gitignore`: Dentro estan los arhivos que git debe ignorar y no subir al repositorio git
- `index.html`: Este es el archivo principal de la página.
- `package.json` y `package-lock.json`: Archivos que listan las dependencias y versiones del proyecto.
- `vite.config.js`: Para ser honesto nunca manejé este archivo, voy a decir que son las configuraciones del builder vite.
- `public/`: En esta carpeta estan los archivos que serán públicos cuando se construya la aplicación.
- `src/`: Finalmente la carpeta src es la carpeta mas importante mientras desarrollemos nuestra aplicación web, aquí tendremos el archivo `main.jsx`, que es donde se encuentra inicializado React y `App.jsx` es por asi decirlo, el componente principal por defecto del proyecto.

## Hora de Aprender a desarrollar en React

### Componentes
Hay mucho que hablar de componentes, pero para empezar... ¿Que rayos es un componente?
En palabras simples es un trozo de código UI de elementos HTML. 
Pero si nos ponemos un poco mas técnicos es una funcion que retorna un elemento HTML, con su propia lógica.


