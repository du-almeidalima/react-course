import React from "react";
import ToolbarStyle from './Toolbar.module.css';
import Logo from '../../UI/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => {
  return (
    <header className={ToolbarStyle.Toolbar}>
      <div>MENU</div>
      <Logo classes={ToolbarStyle.Logo}/>
      <nav className={ToolbarStyle.Nav}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default toolbar;
