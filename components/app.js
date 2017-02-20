import React from 'react';
import ReactDom from 'react-dom';

import firebase from 'firebase';
import './database.js';

import Footer from './footer';
import Header from './header';
import RenderingForm from './renderingForm';
import SignIn from './signIn';
import SubmissionForm from './submissionForm';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            loggedIn: false,
            currentUser: null
        }
    }

    render() {
        if(this.state.loggedIn) {
            return (
                <div>
                    <Header currentUser={ this.state.currentUser }/>
                    <SubmissionForm />
                    <RenderingForm />
                    <Footer/>
                </div>
            )
        } else {
            return <SignIn />
        }
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true, currentUser: user.displayName })
            } else {
                this.setState({ loggedIn: false })
            }
        })
    }
}

export default App;
