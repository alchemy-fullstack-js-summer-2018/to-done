import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class Header extends Component {
  render() {
    return (
      <div>
        <h1>What up people</h1>
        <h2>Its Injoong in the house</h2>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/artists">Artists</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;