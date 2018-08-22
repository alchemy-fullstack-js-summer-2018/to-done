import React, { Component } from 'react';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import { getNotes, addNote } from '../../services/notesApi';

class NotesContainer extends Component {

  state = {
    notes: null
  };

  componentDidMount() {
    console.log('mounted!');
    getNotes()
      .then(notes => {
        this.setState({ notes });
      });
  }

  handleAdd = note => {
    console.log('add!');
    return addNote(note)
      .then(added => {
        this.setState(({ notes }) => {
          return {
            notes: [...notes, added]
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
            <NoteList
              notes={notes}
            />
          </section>
        }
      </div>

    );
  }
}

export default NotesContainer;