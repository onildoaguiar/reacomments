import React from 'react';

// Functional stateless components
export default (props) =>
    <div className="well">
        <div className="media">
            <div className="media-left">
                <img alt={props.comment.user.name} src={props.comment.user.photoURL} className="media-object" />
            </div>
            <div className="media-body">
                <h4 className="media-heading">{props.comment.user.name} <small><i>{`Posted on ${getMonthName(props.comment.date)} ${new Date(props.comment.date).getDate()}, ${new Date(props.comment.date).getFullYear()}`}</i></small></h4>
                <p>{props.comment.comment}</p>
            </div>
        </div>
    </div>

const getMonthName = (date) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[new Date(date).getMonth()];
}

