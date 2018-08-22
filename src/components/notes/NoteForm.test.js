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

    
  });
});