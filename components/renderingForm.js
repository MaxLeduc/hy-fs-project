import React from 'react'

import firebase from 'firebase';

import Form from './form';
import Heading from './heading';
import Preview from './preview';
import Result from './results';

class RenderingForm extends React.Component {
  constructor() {
        super();
        this.state = {
            formValues: []
        };
        this.updateForm = this.updateForm.bind(this);
        this.addOption = this.addOption.bind(this);
    }

    render() {
        return <div>{this.state.formValues}<p>sup</p></div>
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
      const allOFirebase = firebase.database().ref();
      allOFirebase.on('value', (snapshot) => {
        const formValues = snapshot.val();
      });
    }
}

export default RenderingForm
