import React from 'react';
import Burger from "../../Burger/Burger";
import CheckoutSummaryStyle from './CheckoutSummary.module.css';
import Button from "../../UI/Button/Button";

const checkoutSummary = props => {
    return (
        <div className={CheckoutSummaryStyle.CheckoutSummaryWrapper}>
            <h1 className={CheckoutSummaryStyle.Title}>Are we done with this master piece?</h1>

            <div className={CheckoutSummaryStyle.BurgerContainer}>
                <Burger ingredients={props.ingredients}/>
            </div>

            <Button type="Danger" fillStyle="Outline" onClick={props.cancelled} styles={{marginRight: '10px'}}>
                Cancel
            </Button>
            <Button type="Success" fillStyle="Full" onClick={props.confirmed}>
                Continue
            </Button>
        </div>
    );
};

export default checkoutSummary;
