import React from 'react';

const authContext = React.createContext({
  authenticated: false,
  login: () => {}
});

export default authContext;

/**
 * This is a state object wrapper. I define the properties to have an initial value and IDE auto completion.
 * The initial value gets overwritten when the 'value' property is used on the Provider
 */
