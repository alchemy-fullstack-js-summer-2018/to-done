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
      title: 'Blueberry Muffin',
      content: 'is so good',
      completed: false
    };

    wrapper.find('input[name="title"]').simulate('change', {
      target: {
        name: 'title',
        value: note.title
      }
    });

    wrapper.find('textarea').simulate('change', {
      target: {
        name: 'content',
        value: note.content
      }
    });

    wrapper.find('button').simulate('submit');

    const calls = handleComplete.mock.calls;
    expect(calls.length).toBe(1);
    expect(calls[0][0]).toEqual(note);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('renders edit if passed a note prop', () => {
    const handleComplete = jest.fn();
    const promise = Promise.resolve();
    handleComplete.mockReturnValueOnce(promise);
    const handleCancel = jest.fn();

    const note = {
      key: 'asdf',
      title: 'test title',
      content: 'test content'
    };

    const wrapper = mount(<NoteForm
      onComplete={handleComplete}
      onCancel={handleCancel}
      note={note}
    />);

    wrapper.find('textarea').simulate('change', {
      target: {
        name: 'content',
        value: 'updated content'
      }
    });

    const calls = handleComplete.mock.calls;
    expect(calls.length).toBe(1);
    expect(calls[0][0]).toEqual({
      ...note,
      content: 'updated content'
    });

    
  });
});