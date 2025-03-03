import * as validation from "./validation-functions.js";

/**
 * Valida los campos del formulario de registro.
 *
 * @returns {boolean} Devuelve `true` si los campos de registro son válidos, de lo contrario, devuelve `false`.
 */
const validateRegisterFields = () => {
    const name = document.getElementById("name").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const birthDate = document.getElementById("birthDate").value;
    const country = document.getElementById("country").value;
    const terms = document.getElementById("terms");
    let isValid = true;

    if (!validation.isValidName(name)) {
        validation.displayErrorMessage("errorName", "Debe tener más de 2 caracteres y no ser un número.");
        isValid = false;
    }

    if (!validation.isValidName(lastName)) {
        validation.displayErrorMessage("errorLastName", "Debe tener más de 2 caracteres y no ser un número.");
        isValid = false;
    }
    
    if (!validation.isValidEmail(email)) {
        validation.displayErrorMessage("errorEmail", "Debes introducir un correo electrónico válido.");
        isValid = false;
    }

    if (!validation.isValidPassword(password)) {
        validation.displayErrorMessage("errorPassword", "Debe tener entre 8 y 15 caracteres.");
        isValid = false;
    }
    
    if (validation.isEmpty(birthDate)) {
        validation.displayErrorMessage("errorBirthDate", "Debes seleccionar una fecha de nacimiento.");
        isValid = false;
    }
    
    if (validation.isEmpty(country)) {
        validation.displayErrorMessage("errorCountry", "Debes seleccionar un país.");
        isValid = false;
    }

    if (!validation.isValidTerms(terms)) {
        validation.displayErrorMessage("errorTerms", "Debes aceptar los términos y condiciones.");
        isValid = false;
    }
    
    return isValid;   
}

/**
 * Añade un manejador de eventos al documento que se ejecuta cuando el contenido se ha cargado completamente.
 * El manejador de eventos se encarga de añadir la validación al formulario de registro.
 */
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("registerForm").addEventListener("submit", (event) => {
        validation.clearErrorMessages();
        if (!validateRegisterFields()) {
            event.preventDefault();
        }
    });
});
