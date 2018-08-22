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
      title: 'finish this lab',
      notes: 'you can do it!',
      completed: false
    };

    wrapper.find('input[name="title"]').simulate('change', {
      target: {
        name: 'title',
        value: note.title
      }
    });

    wrapper.find('textarea[name="notes"]').simulate('change', {
      target: {
        name: 'notes',
        value: note.notes
      }
    });

    wrapper.find('input[name="completed"]').simulate('change', {
      target: {
        name: 'completed',
        value: note.completed
      }
    });

    wrapper.find('button').simulate('submit');

    const calls = handleComplete.mock.calls;
    expect(calls.length).toBe(1);
    expect(calls[0][0]).toEqual(note);

    return promise
      .then(() => {
        wrapper.update();
        expect(toJSON(wrapper)).toMatchSnapshot();
      });
  });
});