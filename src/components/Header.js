import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.css';

class Header extends Component {

  static propTypes = {

  };

  render() {

    return (
      <div className={styles.header}>
      
        <section>
          <div className="logo">
            <h1>Notes</h1>
          </div>

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
        </section>
        
      </div>
    );
  }
}

export default Header;