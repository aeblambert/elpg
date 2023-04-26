import React from 'react';
import ReactModal from 'react-modal';

// const Modal = ({ isOpen, onRequestClose, children }) => {
const Modal = props => {    
    return (
        <ReactModal
            isOpen={props.isOpen}
            onRequestClose={props.onRequestClose}
            overlayClassName="custom-modal-overlay"
            className="custom-modal-content"
            contentLabel="Modal"
            ariaHideApp={false}
        >
        {props.children}
        </ReactModal>
    );
};

export default Modal;
