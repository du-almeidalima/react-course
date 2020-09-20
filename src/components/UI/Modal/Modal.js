import React from 'react';
import ModalStyle from './Modal.module.css';

const modal = props => {
    const modalStyle = {
        transform: props.show ? 'TranslateY(0) scale(1)' : 'TranslateY(-100vh) scale(0)',
        opacity: props.show ? '1' : '0'
    };

    return (
        <div className={ModalStyle.Modal} style={modalStyle}>
            {props.children}
        </div>
    )
}

export default modal;