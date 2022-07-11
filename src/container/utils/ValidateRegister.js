import * as regex from '../constant/index'

function ValidateRegister(firstName,lastName,email,password,phone, role) {

    const error = {
        firstNameError : "",
        lastNameError : "",
        emailError : "",
        phoneError : "",
        passwordError : "",
        roleError : ""
    }

    const nameRegex = regex.NAME_REGEX
    const emailRegex = regex.EMAIL_REGEX
    const phoneRegex = regex.PHONE_REGEX;
    const passwordRegex = regex.PASSWORD_REGEX

    if (firstName === "") {
        error.firstNameError = "Enter your name";
    }
    else if (!nameRegex.test(firstName)) {
        error.firstNameError = "Invalid name. Please correct and try again";
    }

    if (lastName === "") {
        error.lastNameError = "Enter your name";
    }
    else if (!nameRegex.test(lastName)) {
        error.lastNameError = "Invalid name. Please correct and try again";
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

    if(role === "") {
        error.roleError = "Select any one role"
    }

    if (error.firstNameError || error.lastNameError || error.emailError || error.phoneError || error.passwordError || error.roleError) {
        return error;
    }

    return true
}

export default ValidateRegister
