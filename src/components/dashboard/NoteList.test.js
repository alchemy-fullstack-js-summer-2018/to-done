import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import NoteList from './NoteList';

describe('NoteList', () => {

  it('Renders list', () => {
    const onUpdate = jest.fn();
    const promise = Promise.resolve();
    onUpdate.mockReturnValueOnce(promise);

    const onRemove = jest.fn();
    onRemove.mockReturnValueOnce(promise);

    const note = { 
      key: '123', 
      title: 'a note', 
      content: 'the content', 
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