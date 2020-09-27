import React, { Component, Fragment } from "react";
import ModalStyle from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.show !== this.props.show;
    }

    render() {
    const modalStyle = {
        transform: this.props.show ? "TranslateY(0) scale(1)" : "TranslateY(-100vh) scale(0)",
        opacity: this.props.show ? "1" : "0",
    };

    return (
        <Fragment>
        <Backdrop show={this.props.show} clickHandler={this.props.modalClosed}/>
        <div className={ModalStyle.Modal} style={modalStyle}>
            <button className={ModalStyle.ModalCloseBtn} onClick={this.props.modalClosed}>
            &times;
            </button>
            {this.props.children}
        </div>
        </Fragment>
    );
    }
}

export default Modal;

// Functional Components approach
// export default React.memo(modal);
