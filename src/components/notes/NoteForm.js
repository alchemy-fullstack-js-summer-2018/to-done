import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NoteForm extends Component {
  state = {
    editing: false,
    key: null,
    completed: false,
    content: '',
    title: ''
  };

  static propTypes = {
    note: PropTypes.object
  };

  render() {
    const { completed, content, title } = this.state;

    return (
      <form>
        <InputControl name="title" value={title}/>
        <InputControl name="content" value={content}/>
        <input name="completed" value={completed} type="checkbox"/>
        <p>
          <button type="submit">Placeholder</button>
        </p>
      </form>
    );
  }
}

const InputControl = props => (
  <p>
    <label>
      {props.name}:
      <input {...props} required />
    </label>
  </p>
);
 
export default NoteForm;