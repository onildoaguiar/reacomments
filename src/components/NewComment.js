import React, { Component } from 'react';

class NewComment extends Component {

    /*
    constructor(props) {
        super(props);
    }*/

    handleEnter(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            const timestamp = Date.now();
            this.props.postNewComment({
                id: `comm-${timestamp}`,
                comment: this.refs.comment.value
            })
            comment: this.refs.comment.value = '';
        }
    }

    render() {
        return (
            <div className="row">
                <textarea ref="comment" placeholder="Comment!" className="form-control"
                    onKeyDown={this.handleEnter.bind(this)}>
                </textarea>
            </div>
        );
    }
}

export default NewComment;