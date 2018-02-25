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
      comments: {},
      isLoggedIn: false,
      user: {}
    }

    this.refComments = this.props.base.syncState('comments', {
      context: this,
      state: 'comments'
    });

    this.props.auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ isLoggedIn: true, user })
      } else {
        this.setState({ isLoggedIn: false, user: {} })
      }
    });
  }

  postNewComment(comment) {
    const comments = { ...this.state.comments };
    comments[comment.id] = comment;

    this.setState({ comments })
  }

  auth(provider) {
    this.props.auth.signInWithPopup(this.props.providers[provider]);
  }

  render() {
    return (
      <div>
        <ReactHeader user={this.state.user} />
        <div className="app">
          {this.state.isLoggedIn &&
            <div>
              <button onClick={() => this.props.auth.signOut()}>Sign Out</button>
              <NewComment postNewComment={this.postNewComment.bind(this)} user={this.state.user} />
            </div>
          }
          {!this.state.isLoggedIn &&
            <div className='alert alert-info'>
              <button onClick={() => this.auth('facebook')}>Sign in with Facebook to comment</button>
            </div>
          }
          <Comments comments={this.state.comments} />
        </div>
      </div>
    );
  }
}

export default App;
