import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Note from './Note';

class Notes extends Component {

  static propTypes = {
    notes: propTypes.array,
    onUpdate: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired
  };

  

}