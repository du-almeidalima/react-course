import React from 'react';
import Burger from "../../Burger/Burger";
import CheckoutSummaryStyle from './CheckoutSummary.module.css';
import Button from "../../UI/Button/Button";
import { withRouter } from 'react-router-dom';

const checkoutSummary = props => {

    const cancelHandler = () => {
        props.history.goBack();
    }

    const continueHandler = () => {
        props.history.push('/buyer-data');
    }

    return (
        <div className={CheckoutSummaryStyle.CheckoutSummaryWrapper}>
            <h1 className={CheckoutSummaryStyle.Title}>Are we done with this master piece?</h1>

            <div className={CheckoutSummaryStyle.BurgerContainer}>
                <Burger ingredients={props.ingredients}/>
            </div>

            <Button type="Danger" fillStyle="Outline" onClick={cancelHandler} styles={{marginRight: '10px'}}>
                Cancel
            </Button>
            <Button type="Success" fillStyle="Full" onClick={continueHandler}>
                Continue
            </Button>
        </div>
    );
};

export default withRouter(checkoutSummary);
