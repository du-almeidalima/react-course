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

    addPostClickHandler = () => {
        const post = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author,
        }

        axios.post('https://jsonplaceholder.typicode.com/posts', post)
            .then(res => {
                console.log(res);
            })
    }

    deletePostClickHandler = () => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`)
            .then(res => {
                console.log(res);
            })
    }

    render () {
        let post = (
            <div className="FullPost">
                <p>Please select a Post!</p>
            </div>
        );

        if (this.state.selectedPost && this.props.id === this.state.selectedPost.id) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.selectedPost.title}</h1>
                    <p>{this.state.selectedPost.content}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostClickHandler}>Delete</button>
                    </div>
                </div>
            )
        } else if (this.state.selectedPost && this.props.id !== this.state.selectedPost.id) {
            post = (
                <div className="FullPost">
                    <p>Loading...</p>
                </div>
            )
        }

        return (
            post
        );
    }
}

export default FullPost;