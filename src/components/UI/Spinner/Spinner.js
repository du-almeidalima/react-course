import React from 'react';
import SpinnerStyle from './Spinner.module.css';

const spinner = () => {
    return (
        <div className={SpinnerStyle.Spinner}>
            <div />
            <div />
            <div />
            <div />
        </div>
    )
}

export default spinner;