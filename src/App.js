import React, {Component, Suspense} from 'react';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';

// import Posts from './containers/Posts';
// import User from './containers/User';
import Welcome from './containers/Welcome';

const User = React.lazy(() => import('./containers/User'));
const Posts = React.lazy(() => import('./containers/Posts'));

class App extends Component {
    state = {
        loadPosts: false
    }

    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <nav>
                        <NavLink to="/user">User Page</NavLink> |&nbsp;
                        <NavLink to="/posts">Posts Page</NavLink>
                    </nav>
                    <Route path="/" component={Welcome} exact/>
                    <Route path="/user" render={() => (
                        <Suspense fallback={<div>Loading</div>}>
                            <User/>
                        </Suspense>
                    )}/>

                    {/*  Loading Components without Route */}
                    <hr/>
                    <button onClick={() => this.setState({loadPosts: true})}
                            disabled={this.state.loadPosts}
                    >
                        Load Posts Component
                    </button>

                    { this.state.loadPosts ?
                        (
                            <Suspense fallback={<h1>Loading Posts...</h1>}>
                                <Posts />
                            </Suspense>
                        )
                        : null
                    }
                </React.Fragment>
            </BrowserRouter>
        );
    }
}

export default App;
