import React, { Component } from 'react';
import Notes from './Notes';
import NoteForm from './NoteForm';
// import { 
//   getAnimals, 
//   addAnimal, 
//   updateAnimal, 
//   removeAnimal } from '../../services/animalsApi';

class NotesContainer extends Component {

  state = {
    notes: null
  };

  componentDidMount() {

  }

  // handleAdd = note => {

  // };

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