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
                    'users': []
                }, {
                    'desc': '',
                    'users': []
                }
            ]
          }
        };
        this.updateForm = this.updateForm.bind(this);
        this.addOption = this.addOption.bind(this);
    }

    render() {
        return <div>
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

    componentDidMount() {
      var windowURL = window.location.href
      windowURL = windowURL.split('=').pop()
      const allOFirebase = firebase.database().ref('formValues');
      allOFirebase.on('value', (snapshot) => {
        const formValues = snapshot.val();
        console.log(formValues[windowURL])
        this.setState({formObject: formValues[windowURL]})
      });
    }
}
