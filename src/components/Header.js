import React, { Component } from 'react';
import styles from './Header.css';
import { /* Route, */ NavLink } from 'react-router-dom';

class Header extends Component {

  render() {

    return (
      <div className={styles.header}>
        <nav id="nav-ul">
          <ul>
            <li>
              <NavLink
                to="/"
                style={{ color: 'black', textDecoration: 'none' }} 
                exact activeStyle={{ color: 'rgb(62, 83, 175)', textDecoration: 'underline' }}
              >Home</NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                style={{ color: 'black', textDecoration: 'none' }} 
                activeStyle={{ color: 'rgb(62, 83, 175)', textDecoration: 'underline' }}
              >Dashboard</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;