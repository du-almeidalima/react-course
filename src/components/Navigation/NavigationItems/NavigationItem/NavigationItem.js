import React from 'react';
import { NavLink } from 'react-router-dom';
import NavigationItemStyle from './NavigationItem.module.css';

const navigationItem = props => (
  <li className={NavigationItemStyle.NavigationItem}>
    <NavLink exact={props.exact} to={props.link} activeClassName={NavigationItemStyle.Active} className={NavigationItemStyle.Link} >
      {props.children}
    </NavLink>
  </li>
);

export default navigationItem;