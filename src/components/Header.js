import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() { 
    return (
      <div>
        <section>
          <h1>To Dos</h1>
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