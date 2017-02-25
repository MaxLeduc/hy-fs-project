import React from 'react'

import firebase from 'firebase';

import Form from './form';
import Heading from './heading';
import Preview from './preview';
import Result from './results';

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
            }
        };
        this.updateForm = this.updateForm.bind(this);
        this.onVote = this.onVote.bind(this)
    }

    updateForm(formValues) {
        this.setState({formObject: formValues})
    }

    onVote(i, users) {
        let options = this.state.formObject.options;
        options[i].users = users;
        const formValues = this.state.formObject;
        formValues.options = options;

        var windowURL = window.location.href
        windowURL = windowURL.split('=').pop()

        const currentIssue = firebase.database().ref('formValues/' + windowURL);

        currentIssue.set({
            title: this.state.formObject.title,
            desc: this.state.formObject.desc,
            options: options
        })
    }

    componentDidMount() {
      var windowURL = window.location.href
      windowURL = windowURL.split('=').pop()
      const allOFirebase = firebase.database().ref('formValues');
      allOFirebase.on('value', (snapshot) => {
        const formValues = snapshot.val();
        formValues[windowURL] ? this.setState({formObject: formValues[windowURL]}) : '';
        console.log(formValues[windowURL].options)
      });
    }

    render() {
        return <div>
            <Heading title={ this.state.formObject.title }
                    desc={ this.state.formObject.desc }/>
            {this.state.formObject.options.map((option, i) => (
                <Preview option={ option.desc }
                        key={ i }
                        votes={ option.users ? option.users : null }
                        onVote={ (users) => this.onVote(i, users) }/>
            ))}
        </div>
    }
}
