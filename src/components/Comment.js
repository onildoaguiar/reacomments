import React from 'react';

// Functional stateless components
const Comment = (props) => {
    return (<p className="well">{props.comment.comment}</p>);
}

export default Comment;