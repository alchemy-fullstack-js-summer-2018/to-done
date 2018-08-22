import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Note extends Component {

  static propTypes = {
    note: PropTypes.object.isRequired
  };

  render() {
    const { note } = this.props;

    return (
      <li>
        <h4>Note</h4>
        {note}
      </li>
    );
  }
}

export default Note;