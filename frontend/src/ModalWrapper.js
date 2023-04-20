import React from 'react';
import Modal from 'react-modal';

const ModalWrapper = ({ isOpen, onRequestClose, children }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Modal"
            ariaHideApp={false}
        >
            {children}
        </Modal>
    );
};

export default ModalWrapper;
