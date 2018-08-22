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
  };

  render() {

    const { key, title, content } = this.state;

    return (
      <form>
        <InputControl name="Title" value={title}/>
        <InputControl name="Content" value={content}/>
        <p>
          <button type="submit">{ key ? 'Update' : 'Add' }</button>
          {key && <button type="button">Cancel</button>}
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