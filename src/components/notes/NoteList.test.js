import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import NoteList from './NoteList';

describe('Note List', () => {

  it('Renders display', () => {
    const onUpdate = jest.fn();
    const promise = Promise.resolve();
    onUpdate.mockReturnValueOnce(promise);

    const onRemove = jest.fn();
    onRemove.mockReturnValueOnce(promise);

    const note = { 
      key: 'abc', 
      title: 'Note', 
      content: 'Content', 
      completed: false 
    };

    const wrapper = shallow(<NoteList
      note={note}
      onUpdate={onUpdate}
      onRemove={onRemove}
    />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });

});