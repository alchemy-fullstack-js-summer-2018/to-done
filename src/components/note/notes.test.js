import React from 'react';
import { shallow } from 'enzyme';
import Notes from './Notes';
import toJSON from 'enzyme-to-json';

const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

describe('Notes', () => {
  
  it('renders add if no note prop', () => {
    const notes = [
      { name: 'Laundry', content: 'socks, towels', key: 'abc123' },
      { name: 'Groceries', content: 'bread, pasta, cheese', key: 'abc456' },
      { name: 'Pets', content: 'give kisses and treats', key: 'abc789' }
    ];

    const wrapper = shallow(<Notes
      notes={notes}
      onUpdate={jest.fn()}
      onRemove={jest.fn()}
    />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});