import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import OrderSummaryStyle from './OrderSummary.module.css';
import Button from '../../UI/Button/Button';

const createIngredientsLITemplate = ingredientsEntries => {
    return ingredientsEntries.map(ie => {
        const key = ie[0];
        const amount = ie[1];

        return (
            <li key={key}>
                <b className={OrderSummaryStyle.IngredientName}>{key}</b>: {amount}
            </li>
        )
    });
}

const orderSummary = props => {
    const ingredientsEntries = Object.entries(props.ingredients);
    return (
        <Fragment>
            <h3>Order Summary</h3>
            <ul className={OrderSummaryStyle.IngredientsList}>
                { createIngredientsLITemplate(ingredientsEntries) }
            </ul>
            <p>Continue to Checkout?</p>
            <div className={OrderSummaryStyle.ActionWrapper}>
                <Button type="Danger" fillStyle="Outline" onClick={props.cancelled}>Cancel</Button>
                <Button type="Success" fillStyle="Full" onClick={props.confirmed}>Continue</Button>
            </div>
        </Fragment>
    )
}

orderSummary.propTypes = {
    ingredients: PropTypes.object.isRequired
}

export default orderSummary;