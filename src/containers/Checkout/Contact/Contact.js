import React, {Component, Fragment} from 'react'
import ContactStyle from './Contact.module.css';
import {withRouter} from "react-router-dom";

import burgerBuilderAPI from "../../../api/burger-builder.api";
import Button from '../../../components/UI/Button/Button';
import Input from "../../../components/UI/Input/Input";
import Spinner from "../../../components/UI/Spinner/Spinner";

class Contact extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your name'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your E-mail'
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: ''
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Zip Code'
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: ''
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'},
                    ]
                },
                value: ''
            }
        },
        isLoading: false
    }

    handleInputChange = (e, controlKey) => {
        // The state needs to be treated immutably, so for each level of object nesting we need to create a shallow copy
        const updatedOrderForm = {
            ...this.state.orderForm
        }

        updatedOrderForm[controlKey] = {
            ...updatedOrderForm[controlKey],
            value: e.target.value
        };

        this.setState({orderForm: updatedOrderForm});
    }

    handleFormSubmission = (e) => {
        e.preventDefault();
        // Showing Spinner
        this.setState({ isLoading: true });
        console.log(this.props)
        // Partially Mocked Payload
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice
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
        const formControls = Object.entries(this.state.orderForm).map(([controlKey, controlValue]) => {
            return <Input key={controlKey}
                          elementType={controlValue.elementType}
                          elementConfig={controlValue.elementConfig}
                          changed={e => {this.handleInputChange(e, controlKey)}}
            />
        });

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
                                { formControls }
                                <Button type="Success" fillStyle="Full" classes={ContactStyle.OrderBtn}>
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

/*
 * For using Forms with React we need to manually create the inputs a configure them. We can do this by using a config
 * object and dynamically pass this configuration to the HTML inputs. In this example, the elementConfig are the
 * HTML props that will be spread into the HTML input element.
 */
