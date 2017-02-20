import React from 'react';
import Heading from './heading';

import firebase from 'firebase';

export default class Preview extends React.Component{
    constructor() {
        super();
        this.getCurrentUser=this.getCurrentUser.bind(this);
    }

    render() {
        return <div key= { this.props.datakey }>
            <span onClick={ this.getCurrentUser }>{ this.props.option }</span>
            <span> { this.props.votes ? this.props.votes.length : null}</span>
        </div>
    }

    getCurrentUser() {
        let users = [];
        const user = firebase.auth().currentUser.uid;
        users.push(user)
        this.props.onVote(users)
    }
}
