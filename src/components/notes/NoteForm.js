import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NoteForm extends Component {

  state = {
    editing: false,
    key: null,
    title: '',
    content: ''
  };

  static propTypes = {
    note: PropTypes.object,
    onComplete: PropTypes.func.isRequired,
    onCancel: PropTypes.func
  };

  render() {

    const { key, title, content } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <InputControl name="Title" value={title}/>
        <InputControl name="Content" value={content} style={{width: 300 + "px", height: 100 + "px"}}/>
        <p>
          <button type="submit">{ key ? 'Update' : 'Add' }</button>
          {key && <button type="button" onClick={onCancel}>Cancel</button>}
        </p>
      </form>
    );
  }
}

const InputControl = (props) => (
  <p>
    <label>
      {props.name}:
      <input {...props} required/>
    </label>
  </p>
);