import NoteForm from './NoteForm';
import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';

describe('Note form', () => {
  it('renders add if no note prop', () => {
    const handleComplete = jest.fn();
    const promise = Promise.resolve();
    handleComplete.mockReturnValueOnce(promise);

    const wrapper = mount(<NoteForm onComplete={handleComplete}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();

    const note = {
      title: 'Get veggies',
      content: 'Get some veggies'
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

    // const calls = handleComplete.mock.calls;
    // expect(calls.length).toBe(1);
    // expect(calls[0][0]).toEqual(note);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});