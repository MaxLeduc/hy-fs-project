import React from 'react'

import firebase from 'firebase';

import Header from './header';
import Form from './form';
import FormHeading from './formHeading';
import Preview from './preview';
import Footer from './footer'

export default class RenderingForm extends React.Component {
    constructor() {
        super();
        this.state = {
            formObject: {
                title: '',
                desc: '',
                options: [
                    {
                        'desc': '',
                        'users': [0]
                    }, {
                        'desc': '',
                        'users': [0]
                    }
                ]
            },
            currentUser: ''
        };
        this.onVote = this.onVote.bind(this);
        this.setCurrentUser = this.setCurrentUser.bind(this);
        this.getCurrentVoteURL = this.getCurrentVoteURL.bind(this);
        this.verifyIfUserHasVoted = this.verifyIfUserHasVoted.bind(this);
        this.pushCurrentUserInLocalOptions = this.pushCurrentUserInLocalOptions.bind(this);
        this.updateFirebaseUsers = this.updateFirebaseUsers.bind(this);
    }

    render() {
        const { title, desc, options } = this.state.formObject;
        return <div>
            <div className="wrapper">
                <div className="formRenderWrapper">
                    <FormHeading title={ this.state.formObject.title }
                            desc={ this.state.formObject.desc }/>
                    {this.state.formObject.options.map((option, i) => (
                        <Preview option={ option.desc }
                                key={ i }
                                optionKey={i}
                                votes={ option.users ? option.users : null }
                                setTheUser={(key) => this.setCurrentUser (key)}
                                />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    }

    componentDidMount() {
      var windowURL = this.getCurrentVoteURL();
      const allOFirebase = firebase.database().ref('formValues');
      allOFirebase.on('value', (snapshot) => {
        const formValues = snapshot.val();
        formValues[windowURL] ? this.setState({formObject: formValues[windowURL]}) : '';
      });
    }

    setCurrentUser(key) {
        const user = firebase.auth().currentUser.uid;
        this.setState({currentUser: user});
        setTimeout(function() { this.onVote(key); }.bind(this));
    }

    onVote(key) {
        var didUserVote = this.verifyIfUserHasVoted();
        if (didUserVote) {
            console.log('you have already voted!')
        } else {
            this.pushCurrentUserInLocalOptions(key);
            this.updateFirebaseUsers();
        }
    }

    getCurrentVoteURL() {
        var windowURL = window.location.href;
        windowURL = windowURL.split('=').pop();
        return windowURL;
    }

    verifyIfUserHasVoted() {
        let formObject = Object.assign(this.state.formObject);
        let users = formObject.options.map(option => option.users);
        let flattenedUsers = [].concat.apply([], users);
        const didUserVote = flattenedUsers.indexOf(this.state.currentUser) > -1;
        return didUserVote
    }

    pushCurrentUserInLocalOptions(key) {
        let formObject = Object.assign(this.state.formObject);
        formObject.options[key].users.push(this.state.currentUser);
        this.setState({formObject: formObject});
    }

    updateFirebaseUsers() {
        let currentIssueKey = this.getCurrentVoteURL();
        let formObject = Object.assign(this.state.formObject);
        const database = firebase.database().ref('formValues/' + currentIssueKey);
        database.set({title: formObject.title, desc: formObject.desc, options: formObject.options}).then(function() {
            console.log('sync successful');
        }).catch(function(err) {
            console.log(err);
        })
    }
}
