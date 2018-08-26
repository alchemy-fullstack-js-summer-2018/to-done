import React, { Component } from 'react';
import NoteForm from './NoteForm';
import NoteList from './NoteList';
import { getNotes, addNotes, updateNote, removeNote } from '../../services/notesApi';

class DashboardContainer extends Component {

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
    return addNotes(note)
      .then(added => {
        this.setState(({ notes }) => {
          return {
            notes: [...notes, added]
          };
        });
        return added;
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

  handleRemove = key => {
    return removeNote(key)
      .then(() => {
        this.setState(({ notes }) => {
          return {
            notes: notes.filter(notes => notes.key !== key)
          };
        });
      });
  };

  render() {

    const { notes } = this.state;

    return (
      <div>
        <section>
          <h3>Add Notes</h3>
          <NoteForm onComplete={this.handleAdd}/>
        </section>

        {notes &&
        <section>
          <h3>Notes</h3>
          <NoteList
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

export default DashboardContainer;