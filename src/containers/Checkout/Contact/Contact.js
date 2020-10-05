import React, {Component, Fragment} from 'react'
import ContactStyle from './Contact.module.css';

import Button from '../../../components/UI/Button/Button';
import burgerBuilderAPI from "../../../api/burger-builder.api";
import Spinner from "../../../components/UI/Spinner/Spinner";
import { withRouter } from "react-router-dom";

class Contact extends Component {
    state = {
        isLoading: false
    }

    handleFormSubmission = (e) => {
        e.preventDefault();
        // Showing Spinner
        this.setState({ isLoading: true });
        console.log(this.props)
        // Partially Mocked Payload
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: 'Dudu',
                email: 'duduzinhu@gmail.com',
                address: {
                    street: 'Rua dos Bobos',
                    zipCode: 123456,
                    country: 'Brasil'
                },
                deliveryMethod: 'fastest'
            }
        }

        burgerBuilderAPI.post('/orders.json', order)
            .then(resp => {
                console.log(resp);
                this.props.history.push('/');
            })
            .catch(err => { console.error(err) })
            .finally(() => {
                // Hiding Spinner
                this.setState({ isLoading: false, showPurchaseModal: false });
            })
    }
    render() {
        return (
            <Fragment>
                {this.state.isLoading ?
                    <Spinner /> :
                    <div className={ContactStyle.ContactWrapper}>
                        <section className={ContactStyle.Title}>
                            <h2>Contact Data</h2>
                            <p>Enter your contact data so we can send this amazing burger to you!</p>
                        </section>
                        <div className={ContactStyle.FormWrapper}>
                            <form onSubmit={this.handleFormSubmission}>
                                <input className={ContactStyle.Control} type="text" name="name" placeholder="Name"/>
                                <input className={ContactStyle.Control} type="email" name="email" placeholder="Email"/>
                                <input className={ContactStyle.Control} type="text" name="street" placeholder="Street"/>
                                <input className={ContactStyle.Control} type="text" name="postalCode"
                                       placeholder="Postal Code"/>
                                <Button type="Success"
                                        fillStyle="Full"
                                        classes={ContactStyle.OrderBtn}
                                >
                                    Order Now!
                                </Button>
                            </form>
                        </div>
                    </div>
                }
            </Fragment>
        )
    }
}

export default withRouter(Contact);