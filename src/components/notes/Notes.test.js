import React from 'react';
import { shallow } from 'enzyme';
import Notes from './Notes';
import toJSON from 'enzyme-to-json';

describe('Notes', () => {
  
  it('renders add if no note prop', () => {
    const notes = [
      { title: 'Note1', content: 'Visit Jessie', key: 'key1' },
      { title: 'Note2', content: 'Grocery shop', key: 'key2' },
    ];
    const wrapper = shallow(<Notes 
      notes={notes}
      onUpdate={jest.fn()}
      onRemove={jest.fn()}
    />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});