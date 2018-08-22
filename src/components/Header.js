import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {

  render() {

    return (
      <div>
        <h1>To-Do App</h1>
        <nav>
          <NavLink exact activeClassName="active" to="/">Home</NavLink>&nbsp;
          <NavLink exact activeClassName="active" to="/notes">Notes</NavLink>
        </nav>
      </div>
    );
  }
}

export default Header;