import React from 'react';
import ReactDom from 'react-dom';

import firebase from 'firebase';

import './database.js';

import Header from './header';
import Form from './form';
import Heading from './heading';
import Preview from './preview';
import Result from './results.js';
import AddOption from './addOption.js';
import Footer from './footer.js';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            formObject: {
                title: '',
                desc: '',
                options: [
                    {
                        'desc': '',
                        'votes': 0
                    }, {
                        'desc': '',
                        'votes': 0
                    }
                ],
                newOption: ''
            }
        };

        this.calculateVotes = this.calculateVotes.bind(this);
        this.updateForm = this.updateForm.bind(this);
        this.addOption = this.addOption.bind(this)
    }

    render() {
        return (
            <div>
                <Header />
                <Form formObject={ this.state.formObject } updateForm = { this.updateForm }/>
                <Heading title={ this.state.formObject.title} desc={ this.state.formObject.desc }/>
                { this.state.formObject.options.map((option, i) => (
                    <Preview option={ option.desc }
                    key={ i }/>
                ))}
                { this.state.formObject.options.map((option, i) => (
                    <Result option={ option.desc }
                            votes={ option.votes }
                            key={ i }
                            calculateVotes= { () => this.calculateVotes(i) }/>
                ))}
                <Footer/>
            </div>
        )
    }

    addOption(options) {
        this.setState({
            formObject: [{
                options: options
            }]
        })
    }

    updateForm(formValues) {
        this.setState({
            formObject: formValues
        })
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
