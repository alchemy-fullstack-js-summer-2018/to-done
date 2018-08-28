import NoteForm from './NoteForm';
import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';

const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

describe.skip('Note Form', () => {
  
  it('renders add if no note prop', () => {
    const handleComplete = jest.fn();
    const promise = Promise.resolve();
    handleComplete.mockReturnValueOnce(promise);

    const wrapper = mount(<NoteForm onComplete={handleComplete}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();

    const note = {
      name: 'wash',
      content: 'hair'
    };

    wrapper.find('input[name="name"]').simulate('change', {
      target: { 
        name: 'name',
        value: note.name
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
  
  it('renders edit if note prop', () => {
    const handleComplete = jest.fn();
    const promise = Promise.resolve();
    handleComplete.mockReturnValueOnce(promise);
    const handleCancel = jest.fn();

    const note = { key: 'abc', name: 'tonight', content: 'cook dinner' };

    const wrapper = mount(<NoteForm 
      onComplete={handleComplete}
      onCancel={handleCancel}
      note={note}
    />);

    expect(toJSON(wrapper)).toMatchSnapshot();

    wrapper.find('input[name="name"]').simulate('change', {
      target: { 
        name: 'name',
        value: 'wash' 
      }
    });

    wrapper.find('button[type="submit"]').simulate('submit');

    const calls = handleComplete.mock.calls;
    expect(calls.length).toBe(1); 
    expect(calls[0][0]).toEqual({
      ...note,
      name: 'wash'
    });

    return promise
      .then(() => {
        wrapper.update();
        expect(toJSON(wrapper)).toMatchSnapshot();
      });
  });
});
