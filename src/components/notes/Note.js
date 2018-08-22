import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import NoteDisplay from './NoteDisplay';
import NoteForm from './NoteForm';

class Note extends Component {

  state = {
    editing: false
  };

  static propTypes = {
    note: PropTypes.object.isRequired,
    onUpdate: PropTypes.func.isRequired
  };

  handleEndEdit = () => {
    this.setState({ editing: false });
  };

  render() { 
    const { editing } = this.state;
    const { note } = this.props;

    return ( 
      <li>
        {editing
          ? <Note Form
            note={note}
            onComplete={this.handleComplete}
            onCancel={this.handleEndEdit}
        />
          : <Note Display
            note={note}
            onEdit={this.handleEdit}
            
          />
        }
      </li>
    );
  }
}
 
export default Note;

}
