// Obtener el ID de la tarea desde la URL
const params = new URLSearchParams(window.location.search);
const taskId = params.get('id');

// Elementos del formulario
const tituloInput = document.getElementById('titulo');
const descripcionInput = document.getElementById('descripcion');
const estadoSelect = document.getElementById('estado');
const editTaskForm = document.getElementById('editTaskForm');

// Cargar datos de la tarea al abrir la página
fetch(`/tareas/${taskId}`)
    .then(response => response.json())
    .then(task => {
        tituloInput.value = task.titulo;
        descripcionInput.value = task.descripcion;
        estadoSelect.value = task.estado.toString();
    })
    .catch(error => console.error('Error al cargar la tarea:', error));

// Manejar la edición de la tarea
editTaskForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const updatedTask = {
        titulo: tituloInput.value,
        descripcion: descripcionInput.value,
        estado: estadoSelect.value === "true"
    };

    fetch(`/tareas/${taskId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedTask)
    })
    .then(response => {
        if (response.ok) {
            alert('Tarea actualizada correctamente');
            window.location.href = 'index.html'; // Redirigir a la página principal
        } else {
            alert('Error al actualizar la tarea');
        }
    })
    .catch(error => console.error('Error al actualizar la tarea:', error));
});
