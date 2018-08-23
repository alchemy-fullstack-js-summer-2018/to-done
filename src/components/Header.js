import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import styles from './Header.css';

class Header extends Component {

  static propTypes = {

  };

  render() {
    return (
      <div className={styles.header}>
      
        <section className="header-container">
          <div className="logo">
            <img src={logo}/>
          </div>
          <h1>Welcome to Notes App</h1>
          <nav>
            <ul>
              <li>
                <NavLink exact activeClassName="active" to="/">Home</NavLink>
              </li>
              <li>
                <NavLink exact activeClassName="active" to="/dashboard">Dashboard</NavLink>
              </li>
            </ul>
          </nav>
        </section>

      </div>
    );
  }
}

export default Header;