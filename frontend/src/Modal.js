import React from 'react';
import ReactModal from 'react-modal';

const Modal = ({ isOpen, onRequestClose, children }) => {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="custom-modal-overlay"
            className="custom-modal-content"
            contentLabel="Modal"
            ariaHideApp={false}
        >
            {children}
        </ReactModal>
    );
};

export default Modal;
