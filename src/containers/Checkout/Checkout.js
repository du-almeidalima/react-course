import React, {Component} from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import Contact from './Contact/Contact';

class Checkout extends Component {
    state = {
        ingredients: {},
        totalPrice: null
    }

    componentDidMount() {
        // Ingredients from URL Search Params
        const searchParamsIngredients = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let totalPrice = null;

        for(const [ key, value ] of searchParamsIngredients.entries()) {
            if (key === 'totalPrice') {
                totalPrice = value;
            } else {
                ingredients[key] = +value;
            }
        }

        this.setState({ ingredients, totalPrice })
    }

    render() {
        return (
            <div>
                <h1 className="PageTitle">Checkout</h1>
                <CheckoutSummary ingredients={this.state.ingredients} />
                {/* Using 'render' to pass props */}
                <Route path={this.props.match.path + '/contact'}
                       render={() => <Contact ingredients={this.state.ingredients} totalPrice={this.state.totalPrice}/>}
                />
            </div>
        );
    }
}

export default Checkout;
