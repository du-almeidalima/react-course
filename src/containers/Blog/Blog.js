import React, { Component } from "react";
import Posts from './Posts/Posts';

import "./Blog.css";

class Blog extends Component {
  render() {

    return (
      <div>
        <header>
            <nav className="Navbar">
                <ul>
                    <li>
                        <a href={'/'}>Home</a>
                    </li>
                    <li>
                        <a href={'/posts'}>Posts</a>
                    </li>
                    <li>
                        <a href={'/compose'}>Compose</a>
                    </li>
                </ul>
            </nav>
        </header>
        
        <Posts />
      </div>
    );
  }
}

export default Blog;
