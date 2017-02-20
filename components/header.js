import React from 'react';
import firebase from 'firebase';

class Header extends React.Component {
   constructor() {
        super()
        this.state = {
            'name': 'World\'s Greatest Voting App',
            'makers': [
                {
                    name: 'Joy Liu',
                    twitter: 'joykliu'
                },
                {
                    name: 'Maxime Leduc',
                    twitter: 'ledukeness'
                }
            ]
        }
        this.signout = this.signout.bind(this);
    }

    render() {
        return <header>
            <h1>{ this.state.name }</h1>
            <h3>Made by the coolest developers you will ever know, <a href={ "https://twitter.com/" + this.state.makers[0].twitter  }>{ this.state.makers[0].name }</a> and <a href={ "https://twitter.com/" + this.state.makers[1].twitter }>{ this.state.makers[1].name }</a>  </h3>
            <h2>Hello { this.props.currentUser }</h2>
            <button onClick={ (evt) => this.signout() }>Sign out</button>
        </header>
    }

    signout() {
        firebase.auth().signOut();
    }
}

export default Header;
