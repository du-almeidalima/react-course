import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions/actions';

class Counter extends Component {
    state = {
        counter: 0
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.counter} />
                <CounterControl label="Increment" clicked={() => this.props.onCounterIncrement()} />
                <CounterControl label="Decrement" clicked={() => this.props.onCounterDecrement()}  />
                <CounterControl label="Add 5" clicked={() => this.props.onCounterAdd(5)}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.onCounterRemove(5)}  />
                <hr />
                <button onClick={() => { this.props.onStoreResult(this.props.counter) }}>Store Result</button>
                <ul>
                    { this.props.results.map((item, index) => (
                        <li key={index} onClick={() => { this.props.onDeleteResult(index) }}>{item}</li>
                    ))}
                </ul>
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
        counter: state.ctr.counter,
        results: state.res.results
    }
}

/*
 * Similar to mapStateToProps, the Component doesn't have access to the Store object directly, we need to use a HOC
 * provided by React Redux to give us the access through props. So similar to receiving the State as props, we can
 * get the Dispatch (Store.dispatch) via props. This function will let us create Function Props that will hold
 * the "dispatch" function from Store. So we can simply trigger it by "props.onCounterIncrement" for example.
 */
const mapDispatchToProps = dispatch => {
    return {
        onCounterIncrement: () => dispatch(actionTypes.incrementCounter()),
        onCounterDecrement: () => dispatch(actionTypes.decrementCounter()),
        onCounterAdd: (amount = 1) => dispatch(actionTypes.addCounter(amount)),
        onCounterRemove: (amount = 1) => dispatch(actionTypes.removeCounter(amount)),
        onStoreResult: (result) => dispatch(actionTypes.incrementCounter(result)),
        onDeleteResult: (elIndex) => dispatch(actionTypes.deleteResult(elIndex)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

/* To connect Redux with a Component, we need to wrap it into Redux, so it can access the State and other Redux props.
 * This can be done with the react-redux function "connect()".
 * This function works like a HOC, the difference is that, it's not a HOC but itself, but it returns a HOC. And in this
 * HOC we can wrap the Component.
 *
 * Connect accepts some parameters, some of them are the part of the state you are interested and the Actions this
 * component can dispatch.
 */
