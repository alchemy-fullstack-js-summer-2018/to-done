import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class NoteForm extends Component {

  state = {
    // editing: false,
    key: null,
    name: '',
    message: ''
  }

  static propTypes = {
    onComplete: PropTypes.func.isRequired,
  }

  // componentDidMount() {
  //   const { note } = this.props;
  // }

  handleSubmit = (event) => {
    event.PreventDefault();
    const { name, type, key } = this.state;
    const note = { name, type };
    if(key) note.key = key;

    this.props.onComplete(note)
      .then(() => {
        if(!key) return;
        this.setState({ name: '', message: '' });
      });

  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { key, name, type } = this.state;
    // const { onCancel } = this.props;

    return (
      <form>
        <InputControl name="name" value={name} onChange={this.handleChange}/>
        <InputControl name="type" value={type} onChange={this.handleChange}/>
        <p>
          <button type="submit">{ key ? 'Update' : 'Add' }</button>
        </p>

      </form>
    );
  }
}

const InputControl = (props) => {
  return (
    <p>
      <label>
        {/* {props.name} */}
        <input {...props} required/>
      </label>
    </p>
  );
};

export default NoteForm;
