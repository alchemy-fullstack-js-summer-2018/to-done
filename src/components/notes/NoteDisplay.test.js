import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import NoteDisplay from './NoteDisplay';

describe('Note List', () => {

  it('Renders display', () => {
    const onEdit = jest.fn();
    const promise = Promise.resolve();
    onEdit.mockReturnValueOnce(promise);

    const onDelete = jest.fn();
    onDelete.mockReturnValueOnce(promise);

    const note = { 
      key: 'abc', 
      title: 'Note', 
      content: 'Content', 
      completed: false 
    };

    const wrapper = shallow(<NoteDisplay
      note={note}
      onEdit={onEdit}
      onDelete={onDelete}
    />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });

});