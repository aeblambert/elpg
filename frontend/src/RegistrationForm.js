import React, { useState } from 'react';
import './Form.css';
import config from './config';

const RegistrationForm = ({closeModal, setRegistrationMessage}) => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({ email: "", password: "", confirmPassword: "" });
    const [userRegData, setUserRegData] = useState(
        {
            email:'',
            password:'',
            confirmPassword:''
        });

    const handleUserRegDataChange = (key, value) => {
        setUserRegData(prevData => {
            return (
                {
                    ...prevData,
                    [key]: value
                }
            );
        });
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        if (validateForm()) {
            fetch(`${config.apiUrl}/users/register`, {
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
                    setRegistrationMessage(data.message);
                    closeModal();
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

        // Validate matching password confirmation
        if (password !== confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match.";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-container">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    // value={email}
                    value={userRegData.email}
                    // onChange={(e) => setEmail(e.target.value)}
                    onChange={(e) => handleUserRegDataChange("email", e.target.value)}
                    required
                    autoComplete="email"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            <div className="input-container">
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={userRegData.password}
                    // onChange={(e) => setPassword(e.target.value)}
                    onChange={(e) => handleUserRegDataChange("password", e.target.value)}
                    required
                />
                {errors.password && <span className="error-message">{errors.password}</span>}
            </div>
            <div className="input-container">
                <label htmlFor="password-confirmation">Confirm Password:</label>
                <input
                    type="password"
                    id="password-confirmation"
                    value={userRegData.confirmPassword}
                    //onChange={(e) => setConfirmPassword(e.target.value)}
                    onChange={(e) => handleUserRegDataChange("confirmPassword", e.target.value)}
                    required
                />
                {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
            </div>
            <div className="button-container">
                <button type="submit">Register</button>
            </div>
        </form>
    );
};

export default RegistrationForm;
