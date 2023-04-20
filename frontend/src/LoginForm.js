import React, { useState } from 'react';
import './Form.css';

function LoginForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const validateForm = () => {
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        if (password.length < 8) {
            alert('Password must be at least 8 characters long.');
            return false;
        }

        return true;
    };

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                if (validateForm()) {
                    // Proceed with the login process
                }
            }}
            autoComplete="email"
        >
            <div className="input-container">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
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
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <div className="button-container">
                <button type="submit">Log in</button>
            </div>
        </form>
    );
}

export default LoginForm;