import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Landing.css';

class Landing extends Component {



  render() {
    return (
      <div className={styles.landing}>
        <section>
          <nav>
            <ul>
              <li>
                <NavLink exact activeClassName="active" to="/">Landing</NavLink>
              </li>
              <li>
                <NavLink exact activeClassName="active" to="/dashboard">Dashboard</NavLink>
              </li>
              
            </ul>
          </nav>
        </section>
        <h1>To Done</h1>
        <hr></hr>
        <p>
          Jot down a quick note so you can keep your head straight! Come back to it later if you need to change things up. 
        </p>
      </div>
    );
  }
}

export default Landing;