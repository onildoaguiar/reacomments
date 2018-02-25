import React from 'react';
import App from './App';
import { shallow, mount, render } from 'enzyme';

describe('<App/>', () => {
  const base = {
    syncState: jest.fn()
  }

  const auth = {
    signOut: jest.fn(),
    onAuthStateChanged: jest.fn(),
    signInWithPopup: jest.fn()
  }

  const providers = {
    facebook: jest.fn()
  }

  const comment = {
    "comment": "Salut!",
    "date": "2018-02-25T20:39:40.521Z",
    "id": "comm-1519591180521",
    "user": {
      "name": "Onildo Aguiar",
      "photoURL": "https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/24301216_1638383862850811_5436162771421086469_n.jpg?oh=65f24c76d9e6c69192658abff0ddb02c&oe=5B0974B6",
      "uid": "9SxxOXXt3XcRZRbIoRh1NAf2oE93"
    }
  };

  it('should renders without crashing', () => {
    const wrapper = shallow(<App base={base} auth={auth} providers={providers} />);
  });

  it('should have .app class', () => {
    const wrapper = shallow(<App base={base} auth={auth} providers={providers} />);
    expect(wrapper.find('.app').length).toBe(1);
  });

  it('should adds a new comment to state when postNewComment', () => {
    const wrapper = mount(<App base={base} auth={auth} providers={providers} />);
    wrapper.instance().postNewComment(comment);
    const comments = Object.keys(wrapper.instance().state.comments);
    expect(comments.length).toBe(1);
  });
});
