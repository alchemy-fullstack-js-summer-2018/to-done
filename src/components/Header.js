import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Header extends Component {

  render() {
    return (
      <header>
        <section>
          <h1>3Do List</h1>
        </section>
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
      </header>
    );
  }
}

export default Header;