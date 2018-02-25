import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Comment from './Comment';

describe('<Comment />', () => {
    const comment = { comment: 'test', user: { name: 'Onildo Aguiar' } };

    it('should renders without crashing', () => {
        const wrapper = shallow(<Comment comment={comment} />);

        expect(wrapper.is('.well')).toBe(true);
        expect(wrapper.length).toBe(1);
        expect(wrapper.text()).toBe(`${comment.comment} by: ${comment.user.name}`);
    });
});
