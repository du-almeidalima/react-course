import React, { Fragment } from "react";
import SideDrawerStyle from "./SideDrawer.module.css";
import Logo from "../../UI/Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import BackDrop from "../../UI/Backdrop/Backdrop";

const sideDrawer = (props) => {
  return (
    <Fragment>
      <BackDrop show={props.show} clickHandler={props.close}/>
      <div className={`${SideDrawerStyle.SideDrawer} ${props.show ? SideDrawerStyle.Open : SideDrawerStyle.Closed}`}>
        <div className={SideDrawerStyle.Brand}>
          <strong>Big Burger</strong>
          <Logo classes={SideDrawerStyle.Logo} />
        </div>
        <nav>
          <NavigationItems isAuth={props.isAuth} clickHandler={props.close} />
        </nav>
      </div>
    </Fragment>
  );
};

export default sideDrawer;
