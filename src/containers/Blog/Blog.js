import React, { Component } from "react";
import { NavLink, Route, Switch, Redirect } from "react-router-dom";

import "./Blog.css";
import Posts from './Posts/Posts';
import lazyLoadComponent from "../../hoc/lazyLoadComponent";

class Blog extends Component {

  state = {
    auth: true
  }

  render() {

    return (
      <div>
        <header>
            <nav className="Navbar">
                <ul>
                    <li>
                      <NavLink to="/posts" exact activeClassName="custom-active">Home</NavLink>
                    </li>
                    <li>
                      <NavLink to={{ pathname: '/compose' }}>Compose</NavLink>
                    </li>
                    <li>
                      <NavLink to="/users">Users</NavLink>
                    </li>
                </ul>
            </nav>
        </header>

        <Switch>
          {/* React Guard |e| */}
          { this.state.auth
            // Lazy loading a component with our custom HOC
            ? <Route path="/compose" component={lazyLoadComponent(() => import('./NewPost/NewPost'))} />
            : null
          }
          <Route path="/posts" component={Posts} />
          <Redirect from="/" exact to="/posts" />
          {/* This will render any route not mapped */}
          <Route render={() => <h1>404: Page Not Found</h1>}/>
          {/* Redirect all unknown rotes: <Redirect from="/" exact to="/posts" /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
