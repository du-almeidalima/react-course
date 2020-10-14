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
                value: '',
                validationRules: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your E-mail'
                },
                value: '',
                validationRules: {
                    required: true
                },
                valid: false,
                touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validationRules: {
                    required: true
                },
                valid: false,
                touched: false
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Zip Code'
                },
                value: '',
                validationRules: {
                    required: true,
                    length: 6
                },
                valid: false,
                touched: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validationRules: {
                    required: true
                },
                valid: false,
                touched: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'},
                    ]
                },
                value: 'fastest'
            }
        },
        formValid: false,
        isLoading: false
    }

    validateControl = (value, rules) => {
        let isValid = true;

        // No Rules
        if (rules === undefined) {
            return isValid
        }

        // Is Required
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.length) {
            isValid = value.length === rules.length && isValid;
        }

        return isValid;
    }

    validateForm = (updatedForm) => {
        return Object.values(updatedForm).reduce((acc, cur) => {
            if (acc) {
                return !(cur.valid !== undefined && !cur.valid);
            }

            return false;
        }, true)
    }

    handleInputChange = (e, controlKey) => {
        const value = e.target.value;

        // The state needs to be treated immutably, so for each level of object nesting we need to create a shallow copy
        const updatedOrderForm = {
            ...this.state.orderForm
        }

        // Validation the control against its validationRules
        const isControlValid = this.validateControl(value, updatedOrderForm[controlKey].validationRules);
        updatedOrderForm[controlKey] = {
            ...updatedOrderForm[controlKey],
            value: value,
            valid: isControlValid,
            touched: true
        };

        // Validating the overall form
        const formValid = this.validateForm(updatedOrderForm);
        this.setState({ orderForm: updatedOrderForm, formValid });
    }

    handleFormSubmission = (e) => {
        e.preventDefault();

        // Prevent submission on form invalid
        if (!this.state.formValid) {
            return false;
        }

        // Showing Spinner
        this.setState({ isLoading: true });

        const orderData = Object.entries(this.state.orderForm).reduce((acc, cur) => {
            return { ...acc, [cur[0]]: cur[1].value }
        }, {});

        // Partially Mocked Payload
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            orderData
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
                          valid={controlValue.valid}
                          shouldValidate={controlValue.validationRules}
                          touched={controlValue.touched}
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
                                <Button type="Success"
                                        fillStyle="Full"
                                        classes={ContactStyle.OrderBtn}
                                        disabled={!this.state.formValid}
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

/*
 * For using Forms with React we need to manually create the inputs a configure them. We can do this by using a config
 * object and dynamically pass this configuration to the HTML inputs. In this example, the elementConfig are the
 * HTML props that will be spread into the HTML input element.
 */
