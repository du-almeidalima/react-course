import React from "react";
import layoutStyle from "./Layout.module.css";

const layout = (props) => (
  <React.Fragment>
    <header>
      <ul className={layoutStyle.LayoutPagesList}>
        <li className={layoutStyle.LayoutPagesItem}>Toolbar</li>
        <li className={layoutStyle.LayoutPagesItem}>SideDrawer</li>
        <li className={layoutStyle.LayoutPagesItem}>Backdrop</li>
      </ul>
    </header>

    <main className={layoutStyle.LayoutContainer}>{props.children}</main>
  </React.Fragment>
);

export default layout;
