import React, { Component, Fragment } from "react";
import layoutStyle from "./Layout.module.css";
import Toolbar from "./Navigation/Toolbar/Toolbar";
import SideDrawer from "./Navigation/SideDrawer/SideDrawer";

class Layout extends Component {

  state = {
    showSideDrawer: false
  }

  closeSideDrawerHandler = () => {
    this.setState({ showSideDrawer: false })
  }

  openSideDrawerHandler = () => {
    this.setState({ showSideDrawer: true })
  }

  toggleSideDrawerHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer }
    })
  }

  render() {
    return (
      <Fragment>
        <Toolbar toggleSideDrawer={this.toggleSideDrawerHandler}/>
        <SideDrawer show={this.state.showSideDrawer} close={this.closeSideDrawerHandler} />
        <main className={layoutStyle.LayoutContainer}>
          {this.props.children}
        </main>
      </Fragment>
    );
  }
}

export default Layout;
