import React, { Component } from "react";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import axios from "../../config/http-axios";
import "./Blog.css";

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false,
  };

  componentDidMount() {
    axios
      .get("/posts")
      .then((res) => {
        const mappedResp = res.data.slice(0, 4).map((item) => {
          return {
            ...item,
            author: "Dudu",
          };
        });

        this.setState({
          posts: mappedResp,
          error: false,
        });
      })
      .catch((err) => {
        console.log("[Blog] Error Fetching Posts: ", err);
        this.setState({ error: true });
      });
  }

  selectPostHandler = (id) => {
    this.setState({ selectedPostId: id });
  };

  render() {
    let posts;

    if (this.state.error) {
        posts = <p style={{textAlign: 'center', color: 'red'}}>THE TASK FAILED SUCCESSFULLY!</p>
    } else {
        posts = this.state.posts.map( post => (
            <Post title={post.title}
                  author={post.author}
                  id={post.id}
                  key={post.id}
                  postClicked={() => {this.selectPostHandler(post.id)}}
            />
        ) );
    }

    return (
      <div>

        <header>
            <nav className="Navbar">
                <ul>
                    <li>
                        <a href={'/'}>Home</a>
                    </li>
                    <li>
                        <a href={'/'}>Posts</a>
                    </li>
                    <li>
                        <a href={'/'}>Compose</a>
                    </li>
                </ul>
            </nav>
        </header>

        <section className="Posts">{posts}</section>
        <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
