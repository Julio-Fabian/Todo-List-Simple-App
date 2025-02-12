document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('taskForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Evitar que el formulario se envíe de la forma tradicional

        const titulo = document.getElementById('titulo').value;
        const descripcion = document.getElementById('descripcion').value;
        const estado = document.getElementById('estado').value === 'true'; // Convertir a booleano

        const newTask = {
            titulo,
            descripcion,
            estado
        };

        // Enviar la nueva tarea a la API
        fetch('/tareas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTask)
        })
        .then(response => response.json())
        .then(task => {
            alert('Tarea creada correctamente');
            window.location.href = 'index.html'; // Redirigir a la página principal
        })
        .catch(error => {
            console.error('Error al crear la tarea:', error);
        });
    });
});
