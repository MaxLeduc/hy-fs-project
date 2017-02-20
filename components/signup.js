import React from 'react';

import firebase from 'firebase';

export default class SignUp extends React.Component{
    constructor() {
        super();

        this.state = {
            userName: '',
            password: '',
            email: '',
            erorr: null
        }

        this.signUp = this.signUp.bind(this);
    }

    render() {
        return <div>
            { this.state.error ? <div>{ this.state.erorr}</div> : null }
            <input type="text"
                placeholder="Your Name"
                onChange={ (e) => this.setState({userName: e.target.value})}
            />
            <input type="email"
                placeholder="Your Email"
                onChange={ (e) => this.setState({email: e.target.value})}
            />
            <input type="password"
                placeholder="Your Passowrd"
                onChange={ (e) => this.setState({password: e.target.value})}
            />
            <button onClick={(e) => this.signUp(e)}>Sign Me UP! </button>
        </div>
    }

    signUp(e) {
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((user) => {
            console.log(user.uid)
        })
        .then((user) => this.props.onLogin(this.state.userName))
        .catch((err) => this.setState({error: err.message}))
    }
}
