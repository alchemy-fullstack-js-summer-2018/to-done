import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import NoteList from './NoteList';

describe('Note List', () => {

  it('Renders display', () => {
    const wrapper = shallow(<NoteList
      note={{ title: 'Note', content: 'Content' }}
    />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });

});