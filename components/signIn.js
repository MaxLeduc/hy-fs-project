import React from 'react';

import SignUp from './signup.js';

import firebase from 'firebase';

export default class SignIn extends React.Component{
    constructor() {
        super();
        this.state={
            userName: '',
            password:'',
            mode: 'login',
            error: null
        }

        this.signin = this.signin.bind(this);
    }

    render() {
        if( this.state.mode === 'login' ) {
            return <div className="sign-up-form">
                { this.state.error ? <div> {this.state.erorr } </div> : null }
                <input type="text"
                    placeholder="Username"
                    onChange={ (e) => this.setState({userName: e.target.value}) }
                />
                <input type="password"
                    placeholder="Password"
                    onChange={ (e) => this.setState({password: e.target.value}) }
                />
                <button onClick={(e) => this.signin()}>Sign In</button>
                <a href="#" onClick={ (e) => this.setState({mode: 'signup'})}>Don't have a login? Sign Up! </a>
            </div>
        } else {
            return <SignUp onLogin={ this.props.onLogIn }/>
        }
    }

    signin() {
        firebase.auth().signInWithEmailAndPassword(this.state.userName, this.state.password)
        .then((user) => console.log(user))
        .catch((err) => this.setState({erorr: err.message }))
    }
}
