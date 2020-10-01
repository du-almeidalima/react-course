import React, { Component } from 'react'

const withLazyComponent = importFunction => {

  return class extends Component {
    state = {
      component: null
    }

    componentDidMount() {
      importFunction()
        .then(importedComponent => {
          this.setState({ component: importedComponent.default })
        });
    }

    render() {
      const C = this.state.component;
      return this.state.component ? <C {...this.props} /> : null
    }
  }
}

export default withLazyComponent;
