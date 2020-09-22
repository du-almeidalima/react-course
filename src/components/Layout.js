import React from "react";
import layoutStyle from "./Layout.module.css";
import Toolbar from './Navigation/Toolbar/Toolbar';

const layout = (props) => (
  <React.Fragment>
    <Toolbar />
    <main className={layoutStyle.LayoutContainer}>
      {props.children}
    </main>
  </React.Fragment>
);

export default layout;
