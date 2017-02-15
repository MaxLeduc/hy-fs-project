import React from 'react'

import Form from './form';
import Heading from './heading';
import Preview from './preview';
import Result from './results';

class SubmissionForm extends React.Component {
  constructor() {
        super();
        this.state = {
            formObject: {
                title: '',
                desc: '',
                options: [
                    {
                        'desc': '',
                        'users': []
                    }, {
                        'desc': '',
                        'users': []
                    }
                ],
                newOption: ''
            }
        };
        this.updateForm = this.updateForm.bind(this);
        this.addOption = this.addOption.bind(this);
    }

    render() { 
      return <div>
        <Form formObject={ this.state.formObject } updateForm = { this.updateForm } />
        <Heading title={ this.state.formObject.title} desc={ this.state.formObject.desc } />
        { this.state.formObject.options.map((option, i) => (
            <Preview option={ option.desc }
            key={ i }/>
        ))}
      </div>
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
}

export default SubmissionForm