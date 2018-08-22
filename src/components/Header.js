import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import styles from './Header.css';

class Header extends Component {

  render() {

    return (
      <div className='dynamic-class-here'>

        <section className="header-container">
          <h1>Just DO IT!</h1>
          <p>Don&apos;t let your dreams be dreams...</p>
        </section>
        <nav>
          <ul>
            <li>
              <NavLink exact activeClassName="active" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink exact activeClassName="active" to="/notes">Notes</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;