import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={() => this.counterChangedHandler( 'inc' )} />
                <CounterControl label="Decrement" clicked={() => this.counterChangedHandler( 'dec' )}  />
                <CounterControl label="Add 5" clicked={() => this.counterChangedHandler( 'add', 5 )}  />
                <CounterControl label="Subtract 5" clicked={() => this.counterChangedHandler( 'sub', 5 )}  />
            </div>
        );
    }
}

/*
 * A Component that is using Redux, will no longer have an state, instead, its state is going to be provided by Redux.
 * But remember that Redux provide this is state by wrapping the Component into a HOC, so the state will be getting as
 * props. This function is how you can map the whole application state into props that this component will receive.
 */
const mapStateToProps = state => {
    return {
        ctr: state.counter
    }
}

export default connect(mapStateToProps)(Counter);

/* To connect Redux with a Component, we need to wrap it into Redux, so it can access the State and other Redux props.
 * This can be done with the react-redux function "connect()".
 * This function works like a HOC, the difference is that, it's not a HOC but itself, but it returns a HOC. And in this
 * HOC we can wrap the Component.
 *
 * Connect accepts some parameters, some of them are the part of the state you are interested and the Actions this
 * component can dispatch.
 */
