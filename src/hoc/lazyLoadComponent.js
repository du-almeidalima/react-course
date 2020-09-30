import React, { Component } from 'react'

const lazyLoadComponent = dynamicImportFunc => {

  return class extends Component {
    state = {
      component: null
    };
  
    componentDidMount() {
      dynamicImportFunc()
        .then(cmp => {
          // The result from 'import('../SomeComponent.js)' function
          this.setState({component: cmp.default});
        })
    }
  
    render() {
      const C = this.state.component;
  
      return this.state.component ? <C {...this.props} /> : null
    }
  }
}

export default lazyLoadComponent;

/**
 * LAZY LOADING COMPONENTS IN REACT
 *
 * React tends to be "Pure JavaScript", so in order to load dynamic/lazy content into our code, we need
 * to use the import() function, which is a JavaScript API. This returns a Promise with the imported code.
 * 
 * In this component, we basically wraps the Component to be imported in a function that will render it once 
 * it finishes the import() call. Otherwise it'll return null.
 * This component expects a function as props with the 'import()' already built with the path.
 */