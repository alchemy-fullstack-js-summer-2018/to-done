import React from 'react';
import { shallow } from 'enzyme';
import NoteList from './NoteList';
import toJSON from 'enzyme-to-json';

describe('Notes List', () => {
  it('renders add if no note prop', () => {
    const noteList = [
      { title: 'Get milk', content: 'Must get milk', key: 'abc' },
      { title: 'Get eggs', content: 'Must get eggs', key: 'def' },
      { title: 'Get coffee', content: 'Must get coffee', key: 'ghi' }
    ];

    const wrapper = shallow(<NoteList
      noteList={noteList}
      onUpdate={jest.fn()}
      onRemove={jest.fn()}
    />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});