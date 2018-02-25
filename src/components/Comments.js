import React from 'react';
import Comment from './Comment';

// Functional stateless component
export default (props) => {
    return (
        Object.keys(props.comments).map(key =>
            <Comment key={key} comment={props.comments[key]} />
        )
    );
}