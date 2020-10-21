import React, { Suspense } from 'react';
import { Link, Route } from 'react-router-dom';

import Users from './containers/Users';

const Pizza = React.lazy(() => import('./containers/Pizza'));

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Users</Link> | <Link to="/pizza">Pizza</Link>
      </nav>
      
      <div>
        <Route path="/" exact component={Users} />
        <Route path="/pizza" render={() => (
          <Suspense fallback={null}>
            <Pizza />
          </Suspense>
        )}/>
      </div>
    </div>
  )
}
