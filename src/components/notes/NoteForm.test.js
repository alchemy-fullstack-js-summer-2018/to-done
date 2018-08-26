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
      title: 'Note1',
      content: 'Visit Jessie', 
      completed: false
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

    expect(toJSON(wrapper)).toMatchSnapshot();

    return promise
      .then(() => {
        wrapper.update();
        expect(toJSON(wrapper)).toMatchSnapshot();
      });
  });
  
  it('renders edit if is passed a note prop', () => {
    const handleComplete = jest.fn();
    const promise = Promise.resolve();
    handleComplete.mockReturnValueOnce(promise);
    const handleCancel = jest.fn();

    const note = { 
      key: '123', 
      title: 'Test Note', 
      content: 'Test content',
      completed: false
    };

    const wrapper = mount(<NoteForm 
      onComplete={handleComplete}
      onCancel={handleCancel}
      note={note}
    />);

    expect(toJSON(wrapper)).toMatchSnapshot();

    wrapper.find('input[name="content"]').simulate('change', {
      target: { 
        name: 'content',
        value: 'Updated content' 
      }
    });

    wrapper.find('button[type="submit"]').simulate('submit');

    const calls = handleComplete.mock.calls;
    expect(calls.length).toBe(1); 
    expect(calls[0][0]).toEqual({
      ...note,
      content: 'Updated content'
    });

    return promise
      .then(() => {
        wrapper.update();
        expect(toJSON(wrapper)).toMatchSnapshot();
      });
    

  });
});
