import React from 'react';
import ButtonStyle from './Button.module.css';

/**
 * @description This function will filter this React Component props from the Native HTML Props. In this way
 * the HTML Props such as: 'title', 'disabled', 'onClick' can be passed without the need of mapping
 * @param props All the props (Native HTML Element + Custom)
 * @param customProps Component Specific Props
 * @returns {Object} Native HTML Element Properties
 */
const extractCustomProps = (props, customProps) => {
    return Object.keys(props).reduce((acc, cur) => {
        if (customProps[cur] === undefined ) {
            return { ...acc, [cur]: props[cur] }
        }

        return acc;
    }, {});
}

const button = props => {
    // Properties of this component and not from the HTMLButtonComponent
    const buttonProps = {
        fillStyle: props.fillStyle,
        type: props.type,
        children: props.children,
        styles: props.styles,
        classes: props.classes
    }

    const btnFillStyle = buttonProps.fillStyle ? buttonProps.fillStyle : null;
    const classes = [ButtonStyle.Btn, ButtonStyle[buttonProps.type], ButtonStyle[btnFillStyle]].join(' ');
    const customClasses = props.classes ? buttonProps.classes : null;
    const nativeButtonHtmlProps = extractCustomProps(props, buttonProps);

    return (
        <button {...nativeButtonHtmlProps} className={`${classes} ${customClasses}`} style={{...buttonProps.styles}}>
            {props.children}
        </button>
    )
}

export default button;
