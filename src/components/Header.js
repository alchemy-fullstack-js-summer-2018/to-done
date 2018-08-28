import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.css';

class Header extends Component {

  handleSpecial = event => {
    event.preventDefault();
    alert('that link is cute!');
  };

  render()  {

    return (
      <div className={styles.header}>
      
        <section className="header-container">
          <div>
            <h1>List</h1>
          </div>
      
          <nav>
            <ul>
              <li>
                <NavLink exact activeClassName="active" to="/">Landing</NavLink>
              </li>
              <li>
                <NavLink exact activeClassName="active" to="/notes">To-Do Notes</NavLink> 
              </li>
            </ul>
          </nav>
        </section>
      </div>
    );
  }
}

export default Header;

