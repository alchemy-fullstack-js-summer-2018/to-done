import NoteForm from './NoteForm';
import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';

describe('Note Form', () => {

  it('Renders add if no note prop', () => {
    const handleComplete = jest.fn();
    const promise = Promise.resolve();
    handleComplete.mockReturnValueOnce(promise);

    const wrapper = mount(<NoteForm onComplete={handleComplete}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();

    const note = {
      title: 'Volcanoes',
      content: 'Research'
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

    const calls = handleComplete.mock.calls;
    expect(calls.length).toBe(1);
    expect(calls[0][0]).toEqual(note);
  });

  it('Renders edit if is note prop', () => {
    const handleComplete = jest.fn();
    const promise = Promise.resolve();
    handleComplete.mockReturnValueOnce(promise);
    const handleCancel = jest.fn();

    const note = { key: '123', title: 'Galactica', content: 'Film' };

    const wrapper = mount(<NoteForm 
      onComplete={handleComplete}
      onCancel={handleCancel}
      note={note}
    />);

    expect(toJSON(wrapper)).toMatchSnapshot();

    wrapper.find('input[name="content"]').simulate('change', {
      target: { 
        name: 'content',
        value: 'Show' 
      }
    });

    wrapper.find('button[type="submit"]').simulate('submit');

    const calls = handleComplete.mock.calls;
    expect(calls.length).toBe(1); 
    expect(calls[0][0]).toEqual({
      ...note,
      content: 'Show'
    });

    wrapper.find('button[type="button"]').simulate('click');

    expect(handleCancel.mock.calls.length).toBe(1);

  });

});