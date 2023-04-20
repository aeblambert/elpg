import React from 'react';
import './Form.css';

function LoginForm() {
    return (
        <form>
            <div className="input-container">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div className="input-container">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
            </div>
            <div className="button-container">
                <button type="submit">Log in</button>
            </div>
        </form>
    );
}

export default LoginForm;