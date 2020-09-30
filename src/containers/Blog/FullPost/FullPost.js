import React, { Component } from 'react';

import './FullPost.css';
import axios from '../../../api/posts.api';

class FullPost extends Component {

    state = {
        selectedPost: null,
        error: false
    }

    // == LIFECYCLE ==
    // This method will be executed whenever a prop/state in this component change, so we can use this hook to
    // Fetch data. Note that when using this component as a child route, it will not mount, when it's already rendered
    // Even if the rout it's assign to changes. That's why componentDidUpdate was used.
    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        const id = +this.props.match.params.id;
        const previousId = +prevProps.match.params.id;

        if (id !== previousId) {
            this.fetchData();
        }
    }

    // == METHODS ==
    fetchData() {
        const { id } = this.props.match.params;

        axios.get(`/posts/${id}`)
        .then(res => {
            const post = {
                title: res.data.title,
                content: res.data.body,
                id: res.data.id
            }

            this.setState({ selectedPost: post })
        })
        .catch(err => {
            this.setState({ error: true })
        });
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
                <p style={{color: 'red'}}>ERROR!</p>
            </div>
        );

        if (this.state.selectedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.selectedPost.title}</h1>
                    <p>{this.state.selectedPost.content}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostClickHandler}>Delete</button>
                    </div>
                </div>
            )
        } else if (this.props.match.params.id && !this.state.error) {
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