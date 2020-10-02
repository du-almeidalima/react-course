import React, { Component } from 'react'
import ContactStyle from './Contact.module.css';
import Button from '../../../components/UI/Button/Button';

class Contact extends Component {
  render() {
    return (
      <div className={ContactStyle.ContactWrapper}>
        <section className={ContactStyle.Title}>
          <h2>Contact Data</h2>
          <p>Enter your contact data so we can send this amazing burger to you!</p>
        </section>
        <div className={ContactStyle.FormWrapper}>
          <form>
            <input className={ContactStyle.Control} type="text" name="name" placeholder="Name" />
            <input className={ContactStyle.Control} type="email" name="email" placeholder="Email" />
            <input className={ContactStyle.Control} type="text" name="street" placeholder="Street" />
            <input className={ContactStyle.Control} type="text" name="postalCode" placeholder="Postal Code" />
            <Button type="Success" fillStyle="Full" classes={ContactStyle.OrderBtn}>Order Now!</Button>
          </form>
        </div>
      </div>
    )
  }
}

export default Contact;