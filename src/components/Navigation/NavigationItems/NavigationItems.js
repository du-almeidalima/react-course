import React from 'react';
import NavigationItemsStyle from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
  <ul className={NavigationItemsStyle.NavigationItemsWrapper}>
    <NavigationItem link={'/'}>Burger Builder</NavigationItem>
    <NavigationItem link={'/checkout'}>Checkout</NavigationItem>
  </ul>
);

export default navigationItems;