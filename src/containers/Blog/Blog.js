import React, { Component } from "react";
import { NavLink, Route, Switch } from "react-router-dom";

import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

import "./Blog.css";

class Blog extends Component {
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
          <Route path="/compose" component={NewPost} />
          <Route path="/posts" component={Posts} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
