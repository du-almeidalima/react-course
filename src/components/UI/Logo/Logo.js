import React from 'react';
import LogoStyle from './Logo.module.css';
import burgerLogo from '../../../assets/images/burger-logo.png';

const logo = props => (
  <img className={`${LogoStyle.Logo} ${props.classes}`} src={burgerLogo} alt="Burger-Logo"/>
)

export default logo;