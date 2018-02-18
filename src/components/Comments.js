import React, { Component } from 'react';
import Comment from './Comment';

class Comments extends Component {

    renderComment(comment) {
        return (
            <Comment key={comment.id} comment={comment} />
        );
    }

    render() {
        return (
            this.props.comments.map(comment =>
                this.renderComment(comment)
            )
        );
    }
}

export default Comments;