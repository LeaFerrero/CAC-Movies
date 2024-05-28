

export function isValidName(name)
{
    return name.trim().length > 2 && isNaN(Number(name));
}

export function isValidPassword(password)
{
    return password.trim().length > 7 && password.trim().length < 16 
}

export function isValidEmail(email)
{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function isValidBirthDate(date)
{
    return date !== "";
}

export function isValidCountry(country)
{
    return country !== "";
}

export function isValidTerms(terms) {
    return terms.checked;
}


export function displayErrorMessage(elementId, message) 
{
    const element = document.getElementById(elementId);
    element.textContent = message;
} 

export function clearErrorMessages()
{
    const errorElement = document.querySelectorAll(".errorText")
    errorElement.forEach((element) => {
        element.innerText = "";
    });
}

