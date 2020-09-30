import React, { Component } from "react";
import { Route } from "react-router";
import { NavLink } from "react-router-dom";

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
                      <NavLink to="/" exact activeClassName="custom-active">Home</NavLink>
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

        <Route path="/" exact component={Posts} />
        <Route path="/compose" exact component={NewPost} />
        <Route path="/:id" exact component={FullPost} />
      </div>
    );
  }
}

export default Blog;
