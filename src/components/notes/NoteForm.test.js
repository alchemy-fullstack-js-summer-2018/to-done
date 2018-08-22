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
      title: 'note1',
      message: 'finish your lab'
    };

    wrapper.find('input[name="title"]').simulate('change', {
      target: {
        name: 'title',
        value: note.title
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

  it('renders edit if there is a note prop', () => {
    const handleComplete = jest.fn();
    const handleCancel = jest.fn();
    const promise = Promise.resolve();
    handleComplete.mockReturnValueOnce(promise);
    handleCancel.mockReturnValueOnce(promise);

    const sampleNote = {
      title: 'note1',
      message: 'hey there'
    };

    const wrapper = mount(<NoteForm note={sampleNote} onComplete={handleComplete}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();

    wrapper.find('input[name="message"]').simulate('change', {
      target: {
        name: 'message',
        value: 'finish your lab'
      }
    });

    wrapper.find('button[type="submit"]').simulate('submit');

    const calls = handleComplete.mock.calls;
    expect(calls.length).toBe(1);
    expect(calls[0][0]).toEqual({
      ...sampleNote,
      message: 'finish your lab'
    });

    return promise
      .then(() => {
        wrapper.update();
        expect(toJSON(wrapper)).toMatchSnapshot();
      });
  });
});