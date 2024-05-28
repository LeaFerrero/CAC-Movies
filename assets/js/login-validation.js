import * as validation from "./validation-functions.js";

const validateLoginFields = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    let isValid = true;

    if(!validation.isValidEmail(email))
    {
        validation.displayErrorMessage("errorEmail", "Debes introducir un correo electrónico válido.");
        isValid = false;
    }

    if(!validation.isValidPassword(password))
    {
        validation.displayErrorMessage("errorPassword", "Debe tener entre 8 y 15 caracteres.");
        isValid = false;
    }

    return isValid;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("loginForm").addEventListener("submit", (event) => {
        validation.clearErrorMessages();        
        if(!validateLoginFields())
        {
            event.preventDefault();
        }
    })
});