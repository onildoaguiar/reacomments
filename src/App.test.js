import React from 'react';
import App from './App';
import { shallow, mount, render } from 'enzyme';

describe('<App/>', () => {
  const base = {
    syncState: jest.fn()
  }

  it('renders without crashing', () => {
    const wrapper = shallow(<App base={base} />);
  });

  it('should have .App class', () => {
    const wrapper = shallow(<App base={base} />);
    expect(wrapper.is('.App')).toBe(true);
  });

  it('should shows comments', () => {
    const wrapper = shallow(<App base={base} />);
    expect(wrapper.find('Comments').length).toBe(1);
  });

  it('should shows new comment', () => {
    const wrapper = shallow(<App base={base} />);
    expect(wrapper.find('NewComment').length).toBe(1);
  });

  it('should adds a new comment to state when postNewComment', () => {
    const wrapper = mount(<App base={base} />);
    wrapper.instance().postNewComment({ id: 1, comment: 'test' });
    const comments = Object.keys(wrapper.instance().state.comments);
    expect(comments.length).toBe(1);
  });
});
