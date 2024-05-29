/**
 * Verifica si el nombre es válido.
 * Un nombre es válido si tiene más de 2 caracteres y no es un número.
 *
 * @param {string} name - El nombre a validar.
 * @returns {boolean} Devuelve true si el nombre es válido, de lo contrario, devuelve false.
 */
export function isValidName(name) {
    return name.trim().length > 2 && isNaN(Number(name));
}

/**
 * Verifica si la contraseña es válida.
 * Una contraseña es válida si tiene entre 8 y 15 caracteres.
 *
 * @param {string} password - La contraseña a validar.
 * @returns {boolean} Devuelve true si la contraseña es válida, de lo contrario, devuelve false.
 */
export function isValidPassword(password) {
    return password.trim().length > 7 && password.trim().length < 16;
}

/**
 * Verifica si el correo electrónico es válido.
 * Utiliza una expresión regular para validar el formato del correo electrónico.
 *
 * @param {string} email - El correo electrónico a validar.
 * @returns {boolean} Devuelve true si el correo electrónico es válido, de lo contrario, devuelve false.
 */
export function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Verifica si la fecha de nacimiento es válida.
 * Una fecha de nacimiento es válida si no está vacía.
 *
 * @param {string} date - La fecha de nacimiento a validar.
 * @returns {boolean} Devuelve true si la fecha de nacimiento es válida, de lo contrario, devuelve false.
 */
export function isValidBirthDate(date) {
    return date !== "";
}

/**
 * Verifica si el país seleccionado es válido.
 * Un país es válido si no está vacío.
 *
 * @param {string} country - El país a validar.
 * @returns {boolean} Devuelve true si el país es válido, de lo contrario, devuelve false.
 */
export function isValidCountry(country) {
    return country !== "";
}

/**
 * Verifica si los términos y condiciones han sido aceptados.
 *
 * @param {HTMLInputElement} terms - El checkbox de términos y condiciones.
 * @returns {boolean} Devuelve true si los términos han sido aceptados, de lo contrario, devuelve false.
 */
export function isValidTerms(terms) {
    return terms.checked;
}

/**
 * Muestra un mensaje de error en un elemento específico.
 *
 * @param {string} elementId - El ID del elemento en el que se mostrará el mensaje de error.
 * @param {string} message - El mensaje de error a mostrar.
 */
export function displayErrorMessage(elementId, message) {
    const element = document.getElementById(elementId);
    element.textContent = message;
}

/**
 * Limpia todos los mensajes de error.
 * Selecciona todos los elementos con la clase "errorText" y limpia su contenido de texto.
 */
export function clearErrorMessages() {
    const errorElement = document.querySelectorAll(".errorText");
    errorElement.forEach((element) => {
        element.innerText = "";
    });
}
