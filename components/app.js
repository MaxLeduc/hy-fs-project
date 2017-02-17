import React from 'react';
import ReactDom from 'react-dom';

import firebase from 'firebase';
import './database.js';

import Header from './header';
import SubmissionForm from './submissionForm';
import RenderingForm from './renderingForm';
import Result from './results';
import AddOption from './addOption';
import Footer from './footer';

import SignIn from './signIn';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            loggedIn: false,
            currentUser: null
        }
        this.calculateVotes = this.calculateVotes.bind(this);
        this.login = this.login.bind(this);
    }

    render() {
        if(this.state.loggedIn) {
            return (
                <div>
                    <Header />
                    <SubmissionForm />
                    <RenderingForm />
                    <Footer/>
                </div>
            )
        } else {
            return <SignIn onLogIn={ (username) => this.login(userName) }/>
        }
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({ loggedIn: true, currentUser: user.displayName })
            } else {
                this.setState({ loggedIn: false })
            }
        })
    }

    login(userName) {
        this.setState({ currentUser: userName })
    }

    calculateVotes(i) {
        const options = this.state.formObject.options;
        options[i].votes = options[i].votes + 1;
        this.setState({
            issues: [
                {
                    options: options
                }
            ]
        })
    }
}

export default App;
