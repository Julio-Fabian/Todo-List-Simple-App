document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('taskList');

    // Obtener tareas de la API
    fetch('/tareas')
        .then(response => response.json())
        .then(tasks => {
            tasks.forEach(task => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <ul>
                        <button onclick="verDetalle(${task.id})">Ver Detalles</button>
                        ${task.estado == true ? "Terminado" : "Pendiente"}: <strong>${task.titulo}</strong>
                    </ul>
                    <ul>
                        ${task.estado ? '' : `<button onclick="completarTarea(${task.id})">Completar</button>`}
                        <button onclick="window.location.href='editar-tarea.html?id=${task.id}'">Editar</button>
                        <button onclick="eliminarTarea(${task.id})">Eliminar</button>
                    </ul>
                `;
                taskList.appendChild(li);
            });
        })
        .catch(error => console.error('Error al obtener tareas:', error));
});

// Función para ver detalles de la tarea
function verDetalle(id) {
    fetch(`/tareas/${id}`)
        .then(response => response.json())
        .then(task => {
            alert(`Título: ${task.titulo}\nDescripción: ${task.descripcion}\nEstado: ${task.estado ? 'Completado' : 'Pendiente'}`);
        })
        .catch(error => console.error('Error al obtener detalles:', error));
}

// Función para eliminar una tarea
function eliminarTarea(id) {
    const confirmacion = confirm('¿Estás seguro de que deseas eliminar esta tarea?');
    if (!confirmacion) return;

    fetch(`/tareas/${id}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            alert('Tarea eliminada correctamente');
            window.location.reload();  // Recargar la página para reflejar los cambios
        } else {
            alert('Error al eliminar la tarea');
        }
    })
    .catch(error => console.error('Error al eliminar la tarea:', error));
}

// completamos la tarea con esta funcion.
function completarTarea(id) {
    fetch(`/tareas/${id}/completar`, {
        method: 'PATCH' // con esto indicamos que se modificara solo un campo del modelo de datos.
    })
    .then(response => {
        if (response.ok) {
            alert('Tarea marcada como completada');
            window.location.reload();  // Recargar la lista de tareas
        } else {
            alert('Error al completar la tarea');
        }
    })
    .catch(error => console.error('Error al completar la tarea:', error));
}