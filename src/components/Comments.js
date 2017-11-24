import React, { Component } from 'react';
import Comment from './Comment';

class Comments extends Component {

    renderComment(key, comment) {
        return (
            <Comment key={key} comment={comment} />
        );
    }

    render() {
        return (
            <div>
                {Object.keys(this.props.comments).map(key => 
                    this.renderComment(this.props.comments[key].id, this.props.comments[key].comment)
                )}
            </div>
        );
    }
}

export default Comments;