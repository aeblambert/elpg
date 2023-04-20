
import React, { useState } from 'react';
import './App.css';
import RegistrationForm from './RegistrationForm';
import ModalWrapper from './ModalWrapper';

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="App">
            <header className="App-header">
                <div className="logo-container">
                    <img src="/book_image.jpg" alt="Books" className="book-image-style" />
                    <h1 className="h1-style"> Vienna Kids Bookshare</h1>
                </div>
                <div className="header-buttons">
                    <button className="header-button" onClick={openModal}>
                        Log in</button>
                    <button className="header-button" onClick={openModal}>
                        New account
                    </button>
                </div>


            </header>
            <main className="App-main">
                <p>To view and share books, please log in or create an account</p>
            </main>
            <ModalWrapper isOpen={isModalOpen} onRequestClose={closeModal}>
                <h2>Register</h2>
                <RegistrationForm />
                <button onClick={closeModal}>Close</button>
            </ModalWrapper>
        </div>
    );
}

export default App;



