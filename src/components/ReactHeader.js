import React, { Component } from 'react';
import logo from '../imgs/logo.svg';

class ReactHeader extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        );
    }
}

export default ReactHeader;