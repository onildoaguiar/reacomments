import React, { Component } from 'react';
import logo from '../resources/images/logo.svg';

class ReactHeader extends Component {
    render() {
        return (
            <div>
                <header className="app-header">
                    {this.props.user.photoURL && <div className="profile">
                        <img src={this.props.user.photoURL} className="img-rounded" alt='profile' />
                    </div>}
                    <img src={logo} className="app-logo" alt="logo" />
                </header>
            </div>
        );
    }
}

export default ReactHeader;