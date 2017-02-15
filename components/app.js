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

class App extends React.Component {
    constructor() {
        super();
        this.calculateVotes = this.calculateVotes.bind(this);
    }

    render() {
        return (
            <div>
                <Header />
                <SubmissionForm />
                <RenderingForm />
                <Footer/>
            </div>
        )
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
