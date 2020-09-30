import React from 'react';
import { withRouter } from 'react-router';

import './Post.css';

const post = (props) => {
    return (
        <article className="Post" onClick={props.postClicked}>
            <h1>{props.title}</h1>
            <div className="Info">
                <div className="Author">{props.author}</div>
            </div>
        </article>
    );
};

export default withRouter(post);

/*
 * The Router props, thar are being passed to Posts component, are not send down in the component tree to its children.
 * However, we can access those Router props (history, match, location) with the "withRouter" HOC. Wrapping the child component
 * with this HOC will inject those parent props into the children props.
 */