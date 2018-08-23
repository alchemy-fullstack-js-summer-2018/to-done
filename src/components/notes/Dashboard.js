import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Notes from './Notes.js';
import NoteForm from './NoteForm.js';

class Dashboard extends Component {
  
  static propTypes = {
    notes: PropTypes.arrayOf(Object),
    onAdd: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired
  };
  
  render() {
    const { notes, onAdd, onUpdate } = this.props;
    return (
      <div>
        <h3>Dashboard</h3>
        <section>
          <NoteForm onComplete={onAdd}/>
        </section>
        {notes &&
          <section>
            <h3>Lots o Notes</h3>
            <Notes notes={notes} onUpdate={onUpdate}/>
          </section>
        }
      </div>
    );
  }
}

export default Dashboard;