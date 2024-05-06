# ToDo REST API

Este proyecto es una simple REST API desarrollada en Node.js utilizando Express y MongoDB. Proporciona operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para gestionar tareas pendientes (ToDo).

## Características

- **Crear Tareas**: Agrega nuevas tareas a tu lista.
- **Listar Tareas**: Obtiene todas las tareas existentes.
- **Actualizar Tareas**: Modifica el estado o los detalles de una tarea existente.
- **Eliminar Tareas**: Elimina tareas de la lista.
- **Ver Tareas hechas**: Ver las tareas ya realizadas.
- **Ver Tareas pendientes**Ver las tareas que estan pendientes.

## Instalació
1. Clona este repositorio en tu máquina local.
2. Instala las dependencias utilizando npm:

    ```bash
    npm install
    ```

3. Configura las variables de entorno necesarias, como la URL de conexión a la base de datos MongoDB.

4. Inicia el servidor:

    ```bash
    npm run dev
    ```

## Uso

- **Crear una Tarea**: Envía una solicitud POST a `/api/tareas` con un JSON que contenga el nombre de la tarea.
- **Listar Todas las Tareas**: Envía una solicitud GET a `/api/tareas`.
- **Actualizar una Tarea**: Envía una solicitud PUT a `/api/tareas/:id` con un JSON que contenga los nuevos detalles de la tarea.
- **Eliminar una Tarea**: Envía una solicitud DELETE a `/api/tareas/:id`.
- **Ver Tareas hechas** : Envía una solicitud GET a `/api/tareas/hechas`.
- **Ver Tareas pendientes** : Envía una solicitud GET a `/api/tareas/pendientes`.
