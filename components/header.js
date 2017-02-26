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
                <h1>The Vote-O-Tron</h1>
                <p>You'll never have to make another undemocratic decision, EVER!</p>
                <div className="userInformation">
                    { this.context.currentUser? <p>Hello, this.context.currentUser </p> : '' }
                    <button onClick={ (evt) => this.signout() }>Sign out</button>
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
