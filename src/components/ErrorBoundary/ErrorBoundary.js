import React, { Component } from "react";

export default class ErrorBoundary extends Component {

  state = {
    hasError: false,
    error: null
  }

  componentDidCatch = (error, errorInfo) => {
    this.setState({ hasError: true, error: error })
  }

  render() {
    const style = {
      color: 'tomatoe',
      padding: '10px 15px',
      border: '1px solid tomatoe',
      borderRadius: '5px'
    };

    return this.state.hasError ? <h1 style={style}> {this.state.error.message} </h1> : this.props.children;
  }
}

/**
 * This component is a wrapper component that will wraps the "protected" components.
 */