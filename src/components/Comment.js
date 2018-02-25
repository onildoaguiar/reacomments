import React from 'react';

// Functional stateless components
export default (props) =>
    <div className="well">
        <div className="media">
            <div className="media-left">
                <img alt={props.comment.user.name} src={props.comment.user.photoURL} className="media-object" />
            </div>
            <div className="media-body">
                <h4 className="media-heading">{props.comment.user.name}</h4>
                <p>{props.comment.comment}</p>
            </div>
        </div>
    </div>
