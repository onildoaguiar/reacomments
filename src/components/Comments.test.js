import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Comments from './Comments';

describe('<Comments />', () => {
    const comments = [
        { id: 1, comment: 'test' },
        { id: 2, comment: 'test' }];

    it('should renders without crashing', () => {
        const wrapper = mount(<Comments comments={comments} />);

        expect(wrapper.length).toBe(1);
        expect(wrapper.find('Comment').length).toBe(2);
    });
});
