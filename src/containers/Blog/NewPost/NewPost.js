import React, { Component } from 'react';
import { Redirect } from 'react-router';
import PostAPI from '../../../api/posts.api';

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Dudu',
        redirect: false
    }

    addPostClickHandler = () => {
        const post = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author,
        }

        PostAPI.post('/posts', post)
            .then(res => {
                console.log(res);
                // Setting redirect state to true so it re-renders the Redirect component
                this.setState({ redirect: true });
            })
    }

    render () {
        // When the Redirect component is rendered outside <Switch> component, it redirects instantly
        const redirect = this.state.redirect ? <Redirect to='/'/> : null;

        return (
            <div className="NewPost">
                {redirect}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows={4} value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Dudu">Dudu</option>
                    <option value="Juju">Juju</option>
                </select>
                <button onClick={this.addPostClickHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;