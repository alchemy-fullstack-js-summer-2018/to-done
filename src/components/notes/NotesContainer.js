import React, { Component } from 'react';
import Notes from './Notes';
import NoteForm from './NoteForm';
import { getNotes, addNote } from '../../services/notesApi';

class NotesContainer extends Component {

  state = {
    notes: null
  };

  componentDidMount() {
    getNotes()
      .then(notes => {
        this.setState({ notes });
      });
  }

  handleAdd = note => {
    return addNote(note)
      .then(added => {
        this.setState(({ notes }) => {
          return {
            notes: [...notes, added]
          };
        });
      });
  };

  // handleUpdate = note => {

  // };

  // handleRemove = key => {

  // };

  render() {
    const { notes } = this.state;

    return (
      <div>
        <section>
          <h3>Add a Note</h3>
          <NoteForm onComplete={this.handleAdd}/>
        </section>

        {notes && 
        <section>
          <h3>Notes</h3>
          <Notes 
            notes={notes}
            onUpdate={this.handleUpdate}
            onRemove={this.handleRemove}
          />
        </section>
        }
      </div>
    );
  }
}

export default NotesContainer;