import React from 'react';
import { shallow } from 'enzyme';
import Notes from './Notes';
import toJSON from 'enzyme-to-json';

describe('Notes test', () => {
  
  it('renders add if no note prop', () => {
  
    const notes = [
      { title: 'Nissan', content: 'Car Bio', key: 'abc' },
      { title: 'Top Gear', content: 'Show', key: 'def' },
      { title: 'KOF', content: 'Video Game', key: 'ghi' },
    ];
    const wrapper = shallow(<Notes 
      notes={notes}
      onUpdate={jest.fn()}
      onRemove={jest.fn()}
    />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});