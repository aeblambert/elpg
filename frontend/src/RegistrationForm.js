import React, { useState } from 'react';
import './Form.css';

const RegistrationForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({ email: "", password: "", confirmPassword: "" });

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        if (validateForm()) {
            console.log('Form submitted:', {email, password, confirmPassword});
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autocomplete="email"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            <div className="input-container">
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {errors.password && <span className="error-message">{errors.password}</span>}
            </div>
            <div className="input-container">
                <label htmlFor="password-confirmation">Confirm Password:</label>
                <input
                    type="password"
                    id="password-confirmation"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
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
