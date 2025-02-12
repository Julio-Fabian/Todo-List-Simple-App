import express from 'express'; // Import express ("type":"module" dentro package.json)
import fs from 'fs'; // para modificar el archivo json que suple la base de datos.
import bodyParser from 'body-parser'; // para poder leer el body de las peticiones.

const app = express(); // objeto de app de server, Inicializa express
app.use(bodyParser.json());

app.use(express.static('public')); // para servir archivos estaticos como html.

// obtiene la info de la fuente de datos.
const leerDatos = () => {
    try {
        // datos de la app en la ruta del proyecto.
        const tareas = fs.readFileSync('./db.json');
        return JSON.parse(tareas);
    } catch (error) {
        console.log(error);
    }
}

// modificamos la info de la fuente de datos.
const escribirDatos = (datos) => {
    try {
        fs.writeFileSync('./db.json', JSON.stringify(datos));
    } catch (error) {
        console.log(error);
    }
}

// creamos endpoint base.
app.get('/', (req, res) => {
    res.send('Servidor en puerto 3000: Hola Mundo!!!');
});

////////////////////////// ENDPOINTS //////////////////////////

// endpoint para obtener todas las tareas.
app.get('/tareas', (req, res) => {
    const info = leerDatos();
    res.json(info.tasks);
});

// endpoint para obtener una tarea por id.
app.get('/tareas/:id', (req, res) => {
    const info = leerDatos();
    const id = parseInt(req.params.id);
    const tarea = info.tasks.find(tarea => tarea.id === id);

    // verificamos que la tarea exista.
    if (!tarea) {
        return res.status(404).json({ message: 'La tarea no existe' });
    }

    res.json(tarea);
});

// endpoint para crear una tarea.
app.post('/tareas', (req, res) => {
    const info = leerDatos();
    const body = req.body; // el json body de la app.

    // creamos la nueva tarea.
    const newTask = {
        id: info.tasks.length + 1,
        titulo: body.titulo,
        descripcion: body.descripcion,
        estado: body.estado
    }

    // la agregamos al array de tareas.
    info.tasks.push(newTask);
    escribirDatos(info);
    res.json(newTask); // retornamos la nueva tarea.

});

// endpoint para actualizar una tarea.
app.put('/tareas/:id', (req, res) => {

    // obtenemos las tareas, la info del body y el id de la tarea a editar.
    const info = leerDatos();
    const body = req.body;
    const id = parseInt(req.params.id);

    const tareaIndex = info.tasks.findIndex((tarea) => tarea.id === id);

    // si el id es -1 es que no se ha encontrado la tarea
    if (tareaIndex === -1) {
        return res.status(404).json({ message: 'La tarea no existe' });
    }

    // reemplazamos la informacion de la tarea en el indice con
    // la nueva informacion del body.
    info.tasks[tareaIndex] = {
        ...info.tasks[tareaIndex],
        ...body
    };

    escribirDatos(info);
    res.json({ message: 'Tarea actualizada correctamente' });

});

// endpoint para eliminar una tarea.
app.delete('/tareas/:id', (req, res) => {
    
    const info = leerDatos();
    const id = parseInt(req.params.id);
    const tareaIndex = info.tasks.findIndex((tarea) => tarea.id === id);

    // si el id es -1 es que no se ha encontrado la tarea
    if (tareaIndex === -1) {
        return res.status(404).json({ message: 'La tarea no existe' });
    }

    // cortamos el array con splice.
    info.tasks.splice(tareaIndex, 1); // eliminamos una task en el indice tareaIndex.
    escribirDatos(info);

    res.json({ message: 'Tarea eliminada correctamente' });

});

// endpoint para completar una tarea.
app.patch('/tareas/:id/completar', (req, res) => {
    const info = leerDatos();
    const id = parseInt(req.params.id);
    const tareaIndex = info.tasks.findIndex((tarea) => tarea.id === id);

    // si el id es -1 es que no se ha encontrado la tarea
    if (tareaIndex === -1) {
        return res.status(404).json({ message: 'La tarea no existe' });
    }

    // cambiamos el estado de la tarea a completado.
    info.tasks[tareaIndex].estado = true;
    escribirDatos(info);

    res.json({ message: 'Tarea marcada como completada', tarea: info.tasks[tareaIndex] });
});

////////////////////////// FIN ENDPOINTS //////////////////////////

// ponermos a escucha el servidor en puerto 3000.
app.listen(3000, () => {
    console.log('Server on port 3000');
}); 