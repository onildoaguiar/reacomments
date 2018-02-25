import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Comment from './Comment';

describe('<Comment />', () => {
    const comment = 'test';

    it('should renders without crashing', () => {
        const wrapper = shallow(<Comment comment={comment} />);

        expect(wrapper.is('.well')).toBe(true);
        expect(wrapper.length).toBe(1);
        expect(wrapper.text()).toBe(comment);
    });
});
