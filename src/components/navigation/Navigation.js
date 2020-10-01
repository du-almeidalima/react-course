import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './Navigation.css';

const navigation = props => {

  const navigateBackClickHandler = () => {
    props.history.goBack();
  }

  return (
    <nav className="Navigation">
      <button onClick={navigateBackClickHandler} className="NavigateBackBtn">
        &#8592;
      </button>
      <ul>
        <li>
          <NavLink to="/courses">Courses</NavLink>
        </li>
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
      </ul>
    </nav>
  )
}


export default withRouter(navigation);