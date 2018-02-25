import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Comment from './Comment';

describe('<Comment />', () => {
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
        const wrapper = shallow(<Comment comment={comment} />);

        expect(wrapper.is('.well')).toBe(true);
        expect(wrapper.length).toBe(1);
        expect(wrapper.text()).toBe(`${comment.user.name} Posted on February 25, 2018${comment.comment}`);
    });
});
