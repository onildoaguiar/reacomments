import React, { Component } from 'react';

class NewComment extends Component {

    handleEnter(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            const timestamp = Date.now();
            this.props.postNewComment({
                id: `comm-${timestamp}`,
                comment: this.refs.comment.value,
                date: new Date(timestamp).toJSON(),
                user: {
                    name: this.props.user.displayName,
                    uid: this.props.user.uid,
                    photoURL: this.props.user.photoURL
                }
            });
            this.refs.comment.value = '';
        }
    }

    render() {
        return (
            <div className="well">
                <div className="media">
                    <div className="media-left">
                        <img alt={this.props.user.displayName} src={this.props.user.photoURL} className="media-object" />
                    </div>
                    <div className="media-body">
                        <h4 className="media-heading">{this.props.user.displayName}</h4>
                        <textarea ref="comment" placeholder="Comment!" className="form-control"
                            onKeyDown={this.handleEnter.bind(this)}>
                        </textarea>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewComment;