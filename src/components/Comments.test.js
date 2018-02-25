import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Comments from './Comments';

describe('<Comments />', () => {
    const comments = [
        {
            "comment": "Salut!",
            "date": "2018-02-25T20:39:40.521Z",
            "id": "comm-1519591180521",
            "user": {
                "name": "Onildo Aguiar",
                "photoURL": "https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/24301216_1638383862850811_5436162771421086469_n.jpg?oh=65f24c76d9e6c69192658abff0ddb02c&oe=5B0974B6",
                "uid": "9SxxOXXt3XcRZRbIoRh1NAf2oE93"
            }
        },
        {
            "comment": "Hello!",
            "date": "2018-02-25T20:39:43.065Z",
            "id": "comm-1519591183065",
            "user": {
                "name": "Onildo Aguiar",
                "photoURL": "https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/24301216_1638383862850811_5436162771421086469_n.jpg?oh=65f24c76d9e6c69192658abff0ddb02c&oe=5B0974B6",
                "uid": "9SxxOXXt3XcRZRbIoRh1NAf2oE93"
            }
        }];

    it('should renders without crashing', () => {
        const wrapper = mount(<Comments comments={comments} />);

        expect(wrapper.length).toBe(1);
        expect(wrapper.find('.well').length).toBe(2);
    });
});
