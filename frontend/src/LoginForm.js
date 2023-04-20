import React from 'react';

function LoginForm() {
    return (
        <form>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
            </div>
            <button type="submit">Log in</button>
        </form>
    );
}

export default LoginForm;