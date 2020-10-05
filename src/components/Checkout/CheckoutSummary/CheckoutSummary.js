import React, { Component } from 'react';
import Burger from "../../Burger/Burger";
import CheckoutSummaryStyle from './CheckoutSummary.module.css';
import Button from "../../UI/Button/Button";
import { withRouter } from 'react-router-dom';

class CheckoutSummary extends Component {

    cancelHandler = () => {
        this.props.history.goBack();
    }

    continueHandler = () => {
        this.props.history.push(this.props.match.path + '/contact');
    }

    render() {
        return (
            <div className={CheckoutSummaryStyle.CheckoutSummaryWrapper}>
                <h1 className={CheckoutSummaryStyle.Title}>Are we done with this master piece?</h1>
                <div className={CheckoutSummaryStyle.BurgerContainer}>
                    <Burger ingredients={this.props.ingredients}/>
                </div>
                <div className={CheckoutSummaryStyle.ActionWrapper}>
                    <Button type="Danger" fillStyle="Outline" onClick={this.cancelHandler} styles={{marginRight: '10px'}}>
                        Cancels
                    </Button>
                    <Button type="Success" fillStyle="Full" onClick={this.continueHandler}>
                        Continue
                    </Button>
                </div>
            </div>
        );
    }
}

export default withRouter(CheckoutSummary);
