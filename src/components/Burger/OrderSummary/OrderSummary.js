import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import OrderSummaryStyle from './OrderSummary.module.css';
import Button from '../../UI/Button/Button';

const createIngredientsLITemplate = ingredientsEntries => {
    return ingredientsEntries.map(ie => {
        const key = ie[0];
        const amount = ie[1];

        return (
            <li key={key} className={OrderSummaryStyle.IngredientsListItem}>
                <b className={OrderSummaryStyle.IngredientName}>{key}</b>
                <hr className={OrderSummaryStyle.IngredientsListItemSeparator}/>
                <b>{amount}</b>
            </li>
        )
    });
}

const orderSummary = props => {
    const ingredientsEntries = Object.entries(props.ingredients);
    return (
        <Fragment>
            <h2>Order Summary</h2>
            <ul className={OrderSummaryStyle.IngredientsList}>
                { createIngredientsLITemplate(ingredientsEntries) }
            </ul>
            <hr className={OrderSummaryStyle.Separator}/>
            <div className={OrderSummaryStyle.TotalWrapper}>
                <span>TOTAL</span>
                <hr className={OrderSummaryStyle.IngredientsListItemSeparator}/>
                <span>{props.totalPrice.toFixed(2)}$</span>
            </div>
            <div className={OrderSummaryStyle.ActionWrapper}>
                <Button btnType="Danger" fillStyle="Outline" onClick={props.cancelled} styles={{marginRight: '10px'}}>Cancel</Button>
                <Button btnType="Success" fillStyle="Full" onClick={props.confirmed}>Continue</Button>
            </div>
        </Fragment>
    )
}

orderSummary.propTypes = {
    ingredients: PropTypes.object.isRequired,
    totalPrice: PropTypes.number.isRequired,
    cancelled: PropTypes.func.isRequired,
    confirmed: PropTypes.func.isRequired
}

export default orderSummary;
