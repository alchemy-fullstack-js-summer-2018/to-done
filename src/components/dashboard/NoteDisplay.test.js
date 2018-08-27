import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import NoteDisplay from './NoteDisplay';

describe('NoteDisplay', () => {

  it('renders display', () => {
    const onEdit = jest.fn();
    const promise = Promise.resolve();
    onEdit.mockReturnValueOnce(promise);

    const onDelete = jest.fn();
    onDelete.mockReturnValueOnce(promise);

    const note = { 
      key: '123', 
      title: 'note', 
      content: 'some content', 
      completed: false 
    };

    const wrapper = shallow(<NoteDisplay
      note={note}
      onEdit={onEdit}
      onDelete={onDelete}
    />);

    expect(toJSON(wrapper)).toMatchSnapshot();

    return promise
      .then(() => {
        wrapper.update();
        expect(toJSON(wrapper)).toMatchSnapshot();
      });
  });

});
