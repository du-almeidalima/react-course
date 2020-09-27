import React from 'react';
import NavigationItemStyle from './NavigationItem.module.css';

const navigationItem = props => (
  <li className={NavigationItemStyle.NavigationItem}>
    <a className={`${NavigationItemStyle.Link} ${props.active ? NavigationItemStyle.Active : null}`} 
      href={props.link}
    >
      {props.children}
    </a>
  </li>
);

export default navigationItem;