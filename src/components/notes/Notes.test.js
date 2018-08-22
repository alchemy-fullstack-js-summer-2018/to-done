import React from 'react';
import { shallow } from 'enzyme';
import Notes from './Notes';
import toJSON from 'enzyme-to-json';

describe('Notes test', () => {
  
  it('renders add if no note prop', () => {
  
    const notes = [
      { name: 'Nissan', type: 'Car Bio', key: 'abc' },
      { name: 'Top Gear', type: 'Show', key: 'def' },
      { name: 'KOF', type: 'Video Game', key: 'ghi' },
    ];
    const wrapper = shallow(<Notes 
      notes={notes}
      onUpdate={jest.fn()}
      onRemove={jest.fn()}
    />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});