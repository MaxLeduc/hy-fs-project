import React from 'react';

import SignUp from './signup.js';

import firebase from 'firebase';

export default class SignIn extends React.Component{
    constructor() {
        super();
        this.state={
            email: '',
            password:'',
            mode: 'login',
            error: null
        }

        this.signin = this.signin.bind(this);
    }

    render() {
        if( this.state.mode === 'login' ) {
            return <main className="loginFormWrapper">
                <div className="loginForm">
                    { this.state.error ? <div> {this.state.error } </div> : null }
                    <input type="text"
                        placeholder="Email"
                        onChange={ (e) => this.setState({email: e.target.value}) }
                    />
                    <input type="password"
                        placeholder="Password"
                        onChange={ (e) => this.setState({password: e.target.value}) }
                    />
                    <button onClick={(e) => this.signin(e)}>Sign In</button>
                    <a href="#" onClick={ (e) => this.setState({mode: 'signup'})}>Dont have a login? Sign Up! </a>
                </div>
            </main>
        } else {
            return <SignUp onLogin={ this.props.onLogIn }
                        login={ (mode) => this.toggleSignIn(mode) }/>
        }
    }

    signin(e) {
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((user) => this.setState({ userName: user.displayName }))
        .catch((err) => this.setState({ error: err.message }))
    }

    toggleSignIn(mode) {
        this.setState({mode: mode})
    }
}
