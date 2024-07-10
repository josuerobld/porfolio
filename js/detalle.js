// Función para obtener el parámetro de la URL
function getQueryParam(param) {
    let params = new URLSearchParams(window.location.search);
    return params.get(param);
}

// Obtener el título del proyecto de la URL
const projectTitle = getQueryParam('title');

// Obtener el contenedor de detalles del proyecto
const projectDetails = document.getElementById('project-details');

if(projectTitle == "Whisperwall"){
    projectDetails.innerHTML = `<zero-md src="readmes/whisperwall.md"></zero-md>`;           
}else if (projectTitle == "Semisocial"){
    projectDetails.innerHTML = `<zero-md src="readmes/semisocial.md"></zero-md>`; 
}else{
    projectDetails.innerHTML = `<p>Proyecto no encontrado.</p>`;
}
