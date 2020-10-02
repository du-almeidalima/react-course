import React, {Component} from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Checkout/CheckoutSummary/CheckoutSummary';
import Contact from './Contact/Contact';

class Checkout extends Component {
    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            bacon: 1,
            cheese: 1
        }
    }
    render() {
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients} />
                <Route path={this.props.match.path + '/contact'} component={Contact} />
            </div>
        );
    }
}

export default Checkout;
