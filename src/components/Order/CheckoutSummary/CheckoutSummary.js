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
                <div className={CheckoutSummaryStyle.TitleHeader}>
                    <Button classes={CheckoutSummaryStyle.Cancel} btnType="Danger" fillStyle="Outline" onClick={this.cancelHandler}>
                        Cancel
                    </Button>
                    <h2 className={CheckoutSummaryStyle.Title}>Are we done with this master piece?</h2>
                    <Button classes={CheckoutSummaryStyle.Continue} btnType="Success" fillStyle="Full" onClick={this.continueHandler}>
                        Continue
                    </Button>
                </div>
                <div className={CheckoutSummaryStyle.BurgerContainer}>
                    <Burger ingredients={this.props.ingredients}/>
                </div>
            </div>
        );
    }
}

export default withRouter(CheckoutSummary);
