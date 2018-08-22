import NoteList from './NoteList';
import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

describe.only('Note List', () => {

  it('renders as expected', () => {
    const notes = [
      { key: '1', title: 'Read', notes: 'Finish egg chapter in the Measure of my Powers', completed: false },
      { key: '2', title: 'Grocery Shopping', notes: 'eggs, butter, sea salt, heirloom tomatoes', completed: false },
      { key: '3', title: 'Wash Car', notes: 'Seriously, wash it already!', completed: false }
    ];

    const wrapper = shallow(<NoteList 
      notes={notes}
    />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});