import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';

import layoutStyle from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

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
        <Toolbar isAuth={this.props.isAuth} toggleSideDrawer={this.toggleSideDrawerHandler}/>
        <SideDrawer isAuth={this.props.isAuth} show={this.state.showSideDrawer} close={this.closeSideDrawerHandler} />
        <main className={layoutStyle.LayoutContainer}>
          {this.props.children}
        </main>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuth: !!state.auth.userId
  }
}

export default connect(mapStateToProps)(Layout);
