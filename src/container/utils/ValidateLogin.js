import * as regex from '../constant/index'

function ValidateLogin(email, password) {
    console.log("IN Validation")
    const error = {
        emailError : "",
        passwordError : ""
    }

    const emailRegex = regex.EMAIL_REGEX;
    const passwordRegex = regex.PASSWORD_REGEX;

    if (email === "") {
        error.emailError = "Enter your email";
    }
    else if (!emailRegex.test(email)) {
        error.emailError = "Invalid email address. Please correct and try again.";
    }

    if (password === "") {
        error.passwordError = "Enter your password";
    }
    else if (!passwordRegex.test(password)) {
        error.passwordError = "Minimum 7 characters required";
    }

    if (error.emailError || error.passwordError) {
        return error;
    }

    return true
}

export default ValidateLogin
