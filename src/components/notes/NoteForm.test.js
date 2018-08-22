import NoteForm from './NoteForm';
import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';

describe('Note Form', () => {

  it('renders add if no note prop', () => {
    const handleComplete = jest.fn();
    const promise = Promise.resolve();
    handleComplete.mockReturnValueOnce(promise);

    const wrapper = mount(<NoteForm onComplete={handleComplete}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();

    const note = {
      name: 'note1',
      message: 'finish your lab'
    };

    wrapper.find('input[name="name"]').simulate('change', {
      target: {
        name: 'name',
        value: note.name
      }
    });

    wrapper.find('input[name="message"]').simulate('change', {
      target: {
        name: 'message',
        value: note.message
      }
    });

    wrapper.find('button').simulate('submit');

    const calls = handleComplete.mock.calls;
    expect(calls.length).toBe(1);
    expect(calls[0][0]).toEqual(note);

    expect(toJSON(wrapper)).toMatchSnapshot();

  });
});