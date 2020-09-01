import React from 'react';

const withClass = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  )
};

export default withClass;

/**
 * Every React Component is basically a function that receives props as parameter and returns JSX
 */