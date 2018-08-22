import NoteForm from './NoteForm';
import React from 'react';
import { mount } from 'enzyme';
// import toJSON from 'enzyme-to-json';

describe('Note Form', () => {

  it('renders add if no note prop', () => {
    const handleSubmit = jest.fn();
    const promise = Promise.resolve();
    handleSubmit.mockReturnValueOnce(promise);

    const wrapper = mount(<NoteForm onSubmit={handleSubmit}/>);
    
    const note = {
      title: 'Blueberry Muffin',
      content: 'is so good'
    };

    wrapper.find('input[name="title"]').simulate('change', {
      target: {
        name: 'title',
        value: note.title
      }
    });

    wrapper.find('input[name="content"]').simulate('change', {
      target: {
        name: 'content',
        value: note.content
      }
    });

    wrapper.find('button').simulate('submit');

    const calls = handleSubmit.mock.calls;
    expect(calls.length).toBe(1);
    expect(calls[0][0]).toEqual(note);

  });

});