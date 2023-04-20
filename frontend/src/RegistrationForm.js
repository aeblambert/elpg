import React, { useState } from 'react';
import './Form.css';

const RegistrationForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', { email, password, passwordConfirmation });
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
                />
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
            </div>
            <div className="input-container">
                <label htmlFor="password-confirmation">Confirm Password:</label>
                <input
                    type="password"
                    id="password-confirmation"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    required
                />
            </div>
            <div className="button-container">
                <button type="submit">Register</button>
            </div>
        </form>
    );
};

export default RegistrationForm;
