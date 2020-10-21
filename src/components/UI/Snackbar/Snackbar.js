import React from 'react';
import PropTypes from 'prop-types';
import SnackbarStyle from './Snackbar.module.css';

const snackbar = props => {
    const snackBarStyles = [SnackbarStyle.Snackbar, SnackbarStyle[props.type]];
    let timeoutId = null;

    if (props.show) {
        snackBarStyles.push(SnackbarStyle.Show);
        timeoutId = setTimeout(() => {
            props.close();
        }, 5000);
    } else {
        snackBarStyles.push(SnackbarStyle.Hide);
    }

    return (
        <div className={snackBarStyles.join(' ')}>
            <button className={SnackbarStyle.CloseBtn}
                    onClick={() => {
                        clearTimeout(timeoutId);
                        props.close();
                    }}>
                &times;
            </button>
            {props.message}
        </div>
    );
}

snackbar.propTypes = {
    show: PropTypes.bool,
    message: PropTypes.string,
    type: PropTypes.oneOf(['Success', 'Error', 'Alert', null]),
    close: PropTypes.func,
    timeoutId: PropTypes.number
}

export default snackbar;