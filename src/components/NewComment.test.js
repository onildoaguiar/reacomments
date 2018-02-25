import React from 'react';
import { shallow, mount, render } from 'enzyme';

import NewComment from './NewComment';

describe('<NewComment />', () => {
    const postNewCommentMock = jest.fn();
    const user = {
        displayName: 'Onildo Aguiar',
        photoURL: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/24301216_1638383862850811_5436162771421086469_n.jpg?oh=65f24c76d9e6c69192658abff0ddb02c&oe=5B0974B6',
        uid: '9SxxOXXt3XcRZRbIoRh1NAf2oE93'
    };

    it('should renders without crashing', () => {
        const wrapper = shallow(<NewComment postNewComment={postNewCommentMock} user={user} />);

        expect(wrapper.length).toBe(1);
    });

    it('should handles enter', () => {
        const wrapper = mount(<NewComment postNewComment={postNewCommentMock} user={user} />);
        const eventMock = {
            keyCode: 13,
            preventDefault: jest.fn()
        }

        wrapper.instance().refs.comment.value = 'test';
        wrapper.instance().handleEnter(eventMock);

        expect(wrapper.instance().refs.comment.value).toBe('');
        expect(eventMock.preventDefault.mock.calls.length).toBe(1);
        expect(postNewCommentMock.mock.calls.length).toBe(1);;
        expect(postNewCommentMock.mock.calls[0][0].comment).toBe('test');
    });

    it('should do not handles enter', () => {
        const wrapper = mount(<NewComment postNewComment={postNewCommentMock} user={user} />);
        const eventMock = {
            keyCode: 12,
            preventDefault: jest.fn()
        }

        wrapper.instance().refs.comment.value = 'test';
        wrapper.instance().handleEnter(eventMock);

        expect(wrapper.instance().refs.comment.value).toBe('test');
    });
});
