import React, { Component } from 'react';

import './FullPost.css';
import axios from "axios";

class FullPost extends Component {

    state = {
        selectedPost: null
    }

    // This method will be executed whenever a prop/state in this component change, so we can use this hook to
    // Fetch data
    componentDidUpdate() {
        if (this.props.id) {
            if (!this.state.selectedPost || (this.state.selectedPost.id !== this.props.id)) {
                axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`)
                    .then(res => {
                        const post = {
                            title: res.data.title,
                            content: res.data.body,
                            id: res.data.id
                        }
                        this.setState({ selectedPost: post })
                    })
            }
        }
    }

    render () {
        let post = <p>Please select a Post!</p>;

        if (this.state.selectedPost && this.props.id === this.state.selectedPost.id) {
            post = [
                <h1>{this.state.selectedPost.title}</h1>,
                <p>{this.state.selectedPost.content}</p>,
                <div className="Edit">
                    <button className="Delete">Delete</button>
                </div>
            ]
        } else if (this.state.selectedPost && this.props.id !== this.state.selectedPost.id) {
            post = <p>Loading...</p>
        }

        return (
            <div className="FullPost">
                {post}
            </div>
        );
    }
}

export default FullPost;