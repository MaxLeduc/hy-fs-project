import React from 'react';
import firebase from 'firebase';

import './database.js';

import Header from './header';
import Form from './form';
import Result from './results.js';
import AddOption from './addOption.js';
import Footer from './footer.js';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            formObject: {
                title: '',
                description: '',
                options: [
                    {
                        'description': 'this is an option',
                        'votes': 0
                    }, {
                        'description': 'another option',
                        'votes': 0
                    }
                ],
                newOption: ''
            }
        };
        this.calculateVotes = this.calculateVotes.bind(this);
        this.updateForm = this.updateForm.bind(this)
    }

    addOption(options) {
		this.setState({
			formObject: [{
				options: options
			}]
		})
	}

    render() {
        return (
            <div>
                <Header/>
                <Form formObject={ this.state.formObject } updateForm = { this.updateForm }/>
                { this.state.formObject.options.map((option, i) => (
                    <Result option={ option.title }
                            votes={ option.votes }
                            key={ i }
                            calculateVotes= { () => this.calculateVotes(i) }/>
                ))}
                <AddOption newOption={ (options) => this.addOption(options) }
                            options={ this.state.formObject.options } />
                <Footer/>
            </div>
        )
    }

    updateForm(formValues) {
        this.setState({
            formObject: formValues
        })

        console.log(formValues)
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
