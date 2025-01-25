import * as validation from "./validation-functions.js";

const validateAdminFields = ()=> {
    const title = document.getElementById("title").value;
    const genre = document.getElementById("genre").value;
    const synopsis = document.getElementById("synopsis").value;
    const duration = document.getElementById("duration").value;
    let isValid = true;

    if(validation.isEmpty(title)){
        validation.displayErrorMessage("errorTitle", "No debe de estar vacio.")
        isValid = false;
    }

    
    if(validation.isEmpty(genre)){
        validation.displayErrorMessage("errorGenre", "No debe de estar vacio.")
        isValid = false;
    }

    
    if(validation.isEmpty(synopsis)){
        validation.displayErrorMessage("errorSynopsis", "No debe de estar vacio.")
        isValid = false;
    }
    
    if(validation.isEmpty(duration) || !validation.isNumeric(duration)){
        validation.displayErrorMessage("errorDuration", "No debe de estar vacio, y la duracion debe ser en minutos.")
        isValid = false;
    }

    return isValid;
} 

/**
 * Añade un manejador de eventos al documento que se ejecuta cuando el contenido se ha cargado completamente.
 * El manejador de eventos se encarga de añadir la validación al formulario de registro.
 */
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("adminForm").addEventListener("submit", (event) => {
        validation.clearErrorMessages();
        if (!validateAdminFields()) {
            event.preventDefault();
        }
    });
});