import React, {Fragment} from 'react';
import ModalStyle from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

const modal = props => {
    const modalStyle = {
        transform: props.show ? 'TranslateY(0) scale(1)' : 'TranslateY(-100vh) scale(0)',
        opacity: props.show ? '1' : '0'
    };

    return (
        <Fragment>
            <Backdrop show={props.show} clickHandler={props.modalClosed}/>
            <div className={ModalStyle.Modal} style={modalStyle}>
                <button className={ModalStyle.ModalCloseBtn} onClick={props.modalClosed}>&times;</button>
                {props.children}
            </div>
        </Fragment>
    )
}

export default modal;