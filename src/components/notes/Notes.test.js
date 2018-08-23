import React from 'react';
import { shallow } from 'enzyme';
import Notes from './Notes';
import toJSON from 'enzyme-to-json';

describe('Notes', () => {

  it('renders add if no note prop', () => {
    const notes = [
      { title: 'wash car', content: 'sunday', key: 'abc' },
      { title: 'yard work', content: 'saturday', key: 'def' },
      { title: 'bank', content: 'monday', key: 'ghi' },
    ];
    const wrapper = shallow(<Notes
      notes={notes}
      onUpdate={jest.fn()}
      onRemove={jest.fn()}
    />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});