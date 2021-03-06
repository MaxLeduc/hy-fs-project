import React from 'react';
import firebase from 'firebase';

class Header extends React.Component {
   constructor() {
        super()
        this.signout = this.signout.bind(this);
    }

    render() {
        return <header>
            <div className="wrapper">
                <h1><a href="/" className="header-title">The Vote-O-Tron</a></h1>
                <p>You'll never have to make another undemocratic decision, EVER AGAIN!</p>
                <div className="userInformation">
                    { this.context.currentUser? <p>Hello, {this.context.currentUser} </p> : '' }
                    { this.context.currentUser? <button onClick={ (evt) => this.signout() }>Sign out</button> : '' }
                </div>
            </div>
        </header>
    }

    signout() {
        firebase.auth().signOut();
    }

}

Header.contextTypes = {
  currentUser: React.PropTypes.string
}

export default Header;
