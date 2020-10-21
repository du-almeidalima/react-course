import React from 'react';
import NavigationItemsStyle from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
  <ul className={NavigationItemsStyle.NavigationItemsWrapper} onClick={ props.clickHandler ? props.clickHandler : null }>
    <NavigationItem link={'/'} exact>Burger Builder</NavigationItem>
    { props.isAuth
        ? <NavigationItem link={'/orders'}>Orders</NavigationItem>
        : null
    }
    { props.isAuth
      ? <NavigationItem link={'/logout'}>Logout</NavigationItem>
      : <NavigationItem link={'/auth'}>Auth</NavigationItem>
    }
  </ul>
);

export default navigationItems;
