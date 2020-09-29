import React, { Component } from "react";
import { Route } from "react-router";
import { Link } from "react-router-dom";

import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

import "./Blog.css";

class Blog extends Component {
  render() {

    return (
      <div>
        <header>
            <nav className="Navbar">
                <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to={{ pathname: '/compose' }}>Compose</Link>
                    </li>
                    <li>
                      <Link to="/users">Users</Link>
                    </li>
                </ul>
            </nav>
        </header>

        <Route path="/" exact component={Posts} />
        <Route path="/compose" exact component={NewPost} />
      </div>
    );
  }
}

export default Blog;
