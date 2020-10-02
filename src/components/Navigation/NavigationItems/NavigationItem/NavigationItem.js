import React from 'react';
import { NavLink } from 'react-router-dom';
import NavigationItemStyle from './NavigationItem.module.css';

const navigationItem = props => (
  <li className={NavigationItemStyle.NavigationItem}>
    <NavLink to={props.link} 
      activeClassName={NavigationItemStyle.Active}
      className={NavigationItemStyle.Link}
      exact
    >
      {props.children}
    </NavLink>
  </li>
);

export default navigationItem;