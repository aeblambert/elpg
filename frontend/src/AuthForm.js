import React, { useState } from "react";
import "./Form.css";
import config from "./config";

const AuthForm = ({
                      formType,
                      closeModal,
                      setRegistrationMessage,
                      handleLogin,
                  }) => {
    const isLoginForm = formType === formType;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({ email: "", password: "", confirmPassword: "" });

    const handleSubmit = (isLoginForm, event) => {
        event.preventDefault();
        // Handle form submission logic here
        if (validateForm()) {
            let endpoint = "";
            if (isLoginForm) {
                endpoint = "/users/login";
            } else {
                endpoint = "/users/register";
            }

            fetch(`${config.apiUrl}${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('Failure in network response.');
                    }
                })
                .then(data => {
                    console.log(data.message);
                    if (formType === "register") {
                        setRegistrationMessage(data.message);
                        closeModal();
                    } else if (formType === "login") {
                        // Handle login success here
                    }
                })
                .catch(error => console.error(error));
        }
    };

    const validateForm = () => {
        let isValid = true;
        let newErrors = { email: "", password: "", confirmPassword: "" };

        // Validate email format
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            newErrors.email = "Please enter a valid email address.";
            isValid = false;
        }

        // Validate password complexity (e.g., minimum 8 characters, at least one uppercase, one lowercase, and one digit)
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if (!passwordPattern.test(password)) {
            newErrors.password = "Password must be at least 8 characters long, with at least one uppercase letter, one lowercase letter, and one digit.";
            isValid = false;
        }

        if (!isLoginForm) {
            // Validate matching password confirmation
            if (password !== confirmPassword) {
                newErrors.confirmPassword = "Passwords do not match.";
                isValid = false;
            }
        }

        setErrors(newErrors);
        return isValid;
    };


    return (
        <form onSubmit={handleSubmit}>
            {/* Common form fields for email and password here */}
            {!isLoginForm && (
                <>
                    {/* Confirm password field for registration form */}
                </>
            )}
            <div className="button-container">
                <button type="submit">{isLoginForm ? "Log in" : "Register"}</button>
            </div>
        </form>
    );
};

export default AuthForm;
