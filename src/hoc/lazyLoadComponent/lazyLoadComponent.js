import React, { Component, Fragment } from "react"

const lazyLoadComponent = (dynamicImportFn) => {

  return class extends Component {

    state = {
      component: null
    }

    componentDidMount() {
      dynamicImportFn()
        .then(componentModule => {
          this.setState({ component: componentModule.default });
        })
        .catch(err => {
          console.error('[LazyLoadComponent]: An error happened while importing a component: ', err);
        })
    }

    render() {
      const C = this.state.component;
      return (
        <Fragment>
          { this.state.component ? <C {...this.props} /> : null }
        </Fragment>
      )
    }
  }
}

export default lazyLoadComponent;