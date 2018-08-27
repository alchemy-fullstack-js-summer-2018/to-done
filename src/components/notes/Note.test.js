import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Note from './Note';

describe('Note', () => {

  it('Renders display or edit', () => {
    const handleRemove = jest.fn();
    const handleUpdate = jest.fn();

    const note = { key: 'abc', title: 'Note #1', content: 'Portland is sunny today' };
    const wrapper = shallow(<Note note={note} onRemove={handleRemove} onUpdate={handleUpdate}/>);

    const component = wrapper.instance();
    expect(toJSON(wrapper)).toMatchSnapshot();

    expect(wrapper.state('editing')).toBe(false);
    component.handleEdit();
    expect(wrapper.state('editing')).toBe(true);
    component.handleEndEdit();
    expect(wrapper.state('editing')).toBe(false);

    component.handleDelete();
    
    const removeCalls = handleRemove.mock.calls;
    expect(removeCalls.length).toBe(1);
    expect(removeCalls[0][0]).toBe(note.key);

  });

});