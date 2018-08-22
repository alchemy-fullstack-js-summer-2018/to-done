import React, { Component } from 'react';
import Notes from './NoteList';
import NoteForm from './NoteForm';
import { getNotes, addNote, updateNote } from '../../services/notesApi';

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

  handleUpdate = note => {
    return updateNote(note)
      .then(updated => {
        this.setState(({ notes }) => {
          return {
            notes: notes.map(note => note.key === updated.key ? updated : note)
          };
        });
      });
  };

  render() {
    const { notes } = this.state;
    
    return (
      <div>
        <section>
          <h1>Add a note.</h1>
          <NoteForm onComplete={this.handleAdd}/>
        </section>

        {notes &&
          <section>
            <h3>Notes</h3>
            <Notes
              notes={notes}
              onUpdate={this.handleUpdate}
            />
          </section>
        }
      </div>

    );
  }
}

export default NotesContainer;