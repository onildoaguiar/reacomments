import React, { Component } from 'react';
import 'bootstrap-css-only';
import './App.css';

import NewComment from './components/NewComment';
import ReactHeader from './components/ReactHeader';
import Comments from './components/Comments';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      comments: []
    }

    this.refComments = this.props.base.syncState('comments', {
      context: this,
      state: 'comments'
    })
  }

  postNewComment(comment) {
    const comments = this.state.comments;
    comments.push(comment)

    this.setState({ comments })
  }

  render() {
    return (
      <div className="App">
        <ReactHeader />
        <div className="container">
          <h1 className="App-title">System of comments</h1>
          <NewComment postNewComment={this.postNewComment.bind(this)} />
          <Comments comments={this.state.comments} />
        </div>
      </div>
    );
  }
}

export default App;
