
function ValidateRegister(name,email,password,phone) {

    const error = {
        nameError : "",
        emailError : "",
        phoneError : "",
        passwordError : ""
    }

    const nameRegex = /^[a-zA-Z]{2,15}$/;
    const emailRegex = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z]+)\.([a-zA-Z]{2,5})$/;
    const phoneRegex = /^[6-9]{1}[0-9]{9}$/;
    const passwordRegex = /^[A-Za-z0-9]{7,15}$/;

    if (name === "") {
        error.nameError = "Enter your name";
    }
    else if (!nameRegex.test(name)) {
        error.nameError = "Invalid name. Please correct and try again";
    }

    if (email === "") {
        error.emailError = "Enter your email";
    }
    else if (!emailRegex.test(email)) {
        error.emailError = "Invalid email address. Please correct and try again.";
    }

    if (phone === "") {
        error.phoneError = "Enter your phone number";
    }
    else if (!phoneRegex.test(phone)) {
        error.phoneError = "Invalid phone number. Please correct and try again.";
    }

    if (password === "") {
        error.passwordError = "Enter your password";
    }
    else if (!passwordRegex.test(password)) {
        error.passwordError = "Minimum 7 characters required";
    }

    if (error.nameError || error.emailError || error.phoneError || error.passwordError) {
        return error;
    }

    return true
}

export default ValidateRegister
