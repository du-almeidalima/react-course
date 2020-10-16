import React from 'react';
import NavigationItemsStyle from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
  <ul className={NavigationItemsStyle.NavigationItemsWrapper}>
    <NavigationItem link={'/'} exact>Burger Builder</NavigationItem>
    <NavigationItem link={'/orders'}>Orders</NavigationItem>
    <NavigationItem link={'/auth'}>Auth</NavigationItem>
  </ul>
);

export default navigationItems;