import * as validation from "./validation-functions.js";

/**
 * Valida los campos del formulario de inicio de sesión.
 *
 * @returns {boolean} Devuelve true si los campos de inicio de sesión son válidos, de lo contrario, devuelve false.
 */
const validateLoginFields = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    let isValid = true;

    if (!validation.isValidEmail(email)) {
        validation.displayErrorMessage("errorEmail", "Debes introducir un correo electrónico válido.");
        isValid = false;
    }

    if (!validation.isValidPassword(password)) {
        validation.displayErrorMessage("errorPassword", "Debe tener entre 8 y 15 caracteres.");
        isValid = false;
    }

    return isValid;
}

/**
 * Añade un manejador de eventos al documento que se ejecuta cuando el contenido se ha cargado completamente.
 * El manejador de eventos se encarga de añadir la validación al formulario de inicio de sesión.
 */
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("loginForm").addEventListener("submit", (event) => {
        validation.clearErrorMessages();
        if (!validateLoginFields()) {
            event.preventDefault();
        }
    });
});
