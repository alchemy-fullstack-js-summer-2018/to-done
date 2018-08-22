import React from 'react';
import NoteForm from './NoteForm';
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
      title: 'ACL',
      content: 'Reacting to React',
      completed: false
    };

    wrapper.find('input[name="title"]').simulate('change', {
      target: {
        name: 'title',
        value: note.title
      }
    });

    wrapper.find('textarea[name="content"]').simulate('change', {
      target: {
        name: 'content',
        value: note.content
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

  it('renders edit if note prop', () => {
    const handleComplete = jest.fn();
    const promise = Promise.resolve();
    handleComplete.mockReturnValueOnce(promise);
    const handleCancel = jest.fn();

    const note = { 
      key: 'key', 
      title: 'A note', 
      content: 'A nice note.',
      completed: false
    };

    const wrapper = mount(<NoteForm
      onComplete={handleComplete}
      onCancel={handleCancel}
      note={note}
    />);

    wrapper.find('textarea[name="content"]').simulate('change', {
      target: {
        name: 'content',
        value: 'A great note!'
      }
    });

    wrapper.find('button[type="submit"]').simulate('submit');

    const calls = handleComplete.mock.calls;
    expect(calls.length).toBe(1);
    expect(calls[0][0]).toEqual({
      ...note,
      content: 'A great note!'
    });

    return promise
      .then(() => {
        wrapper.update();
        expect(toJSON(wrapper)).toMatchSnapshot();
      });
  });
});