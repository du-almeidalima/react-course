import React from "react";
import ToolbarStyle from './Toolbar.module.css';
import Logo from '../../UI/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => {
  console.log(props.isAuth)
  return (
    <header className={ToolbarStyle.Toolbar}>
      <Logo classes={ToolbarStyle.Logo}/>
      <button className={ToolbarStyle.SideDrawer} onClick={props.toggleSideDrawer}/>
      <nav className={`${ToolbarStyle.Nav} ${ToolbarStyle.DesktopOnly}`}>
        <NavigationItems isAuth={props.isAuth}/>
      </nav>
    </header>
  );
};

export default toolbar;
