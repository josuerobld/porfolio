// Función para obtener el parámetro de la URL
function getQueryParam(param) {
    let params = new URLSearchParams(window.location.search);
    return params.get(param);
}

// Datos de ejemplo para los proyectos
const projects = {
    "Whisperwall": {
        "description": "Plataforma web con react, node.js y Mysql para el Proyecto Acción de seminario de un colegio de nivel medio, donde los alumnos comentan sobre problemas de acoso de manera privada y segura, y los profesores les dan seguimiento.",
        "technologies": "Mysql | Node.js | React",
        "github": "http://www.github.com",
        "videoDemo": "https://www.youtube.com/embed/jNQXAC9IVRw"
    },
    // Añade más proyectos aquí
};

// Obtener el título del proyecto de la URL
const projectTitle = getQueryParam('title');

// Obtener el contenedor de detalles del proyecto
const projectDetails = document.getElementById('project-details');

// Mostrar los detalles del proyecto
if (projects[projectTitle]) {
    const project = projects[projectTitle];
    projectDetails.innerHTML = `
        <zero-md src="readmes/whisperwall.md"></zero-md>
    `;
} else {
    projectDetails.innerHTML = `<p>Proyecto no encontrado.</p>`;
}
