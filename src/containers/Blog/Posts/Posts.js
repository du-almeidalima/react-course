import React, { Component } from 'react';
import './Posts.css';
import Post from '../../../components/Post/Post';
import PostAPI from '../../../api/posts.api';

export default class Posts extends Component {

  state = {
    posts: [],
    selectedPostId: null,
    error: false,
  };


  componentDidMount() {
    PostAPI
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
      <section className="Posts">
        { posts }
      </section>
    )
  }
}
