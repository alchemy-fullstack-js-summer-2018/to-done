import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.css';

class Header extends Component {
  static propTypes = {

  };

  handleSpecial = event => {
    event.preventDefault();
    alert('that link is cute!');

  };

  render()  {
    
    return (
      <div className={styles.header}>
      
        <section className="header-container">
          <h1>List</h1>
      
          <nav>
            <ul>
              <li>
                <NavLink exact activeClassName="active" to="/">Home</NavLink>
              </li>
              <li>
                <NavLink exact activeClassName="active" to="/list">Task List</NavLink> 
              </li>
          
            </ul>
          </nav>
        </section>
      </div>
    );
  }
}

export default Header;

