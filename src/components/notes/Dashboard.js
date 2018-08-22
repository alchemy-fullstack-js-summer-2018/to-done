import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Notes from './Notes.js';
import NoteForm from './NoteForm.js';

class Dashboard extends Component {
  
  static propTypes = {
    notes: PropTypes.arrayOf(Object),
    onAdd: PropTypes.func.isRequired
  };
  
  render() {
    const { notes, onAdd } = this.props;
    return (
      <div>
        <h3>Dashboard</h3>
        <section>
          <NoteForm onComplete={onAdd}/>
        </section>
        {notes &&
          <section>
            <h3>Lots o Notes</h3>
            <Notes notes={notes}/>
          </section>
        }
      </div>
    );
  }
}

export default Dashboard;