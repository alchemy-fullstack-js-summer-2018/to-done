import NoteDisplay from './NoteDisplay';
import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

describe('Note Display', () => {
  
  it('renders display, then edit', () => {
    const handleEdit = jest.fn();
    const handleDelete = jest.fn();

    const wrapper = shallow(<NoteDisplay 
      note={{ name: 'name', content: 'type' }}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />);

    expect(toJSON(wrapper)).toMatchSnapshot();
    

    wrapper.find('button[name="edit"]').simulate('click');
    const editCalls = handleEdit.mock.calls;
    expect(editCalls.length).toBe(1);

    wrapper.find('button[name="delete"]').simulate('click');
    const deleteCalls = handleDelete.mock.calls;
    expect(deleteCalls.length).toBe(1);

  });
});