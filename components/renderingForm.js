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
        return <div>{this.state.formValues}</div>
      // return <div>
      //   <Form formObject={ this.state.formvalues.formObject } updateForm = { this.updateForm } />
      //   <Heading title={ this.state.formvalues.formObject.title} desc={ this.state.formvalues.formObject.desc } />
      //   { this.state.formvalues.formObject.options.map((option, i) => (
      //       <Preview option={ option.desc }
      //       key={ i }/>
      //   ))}
      //   { this.state.formvalues.formObject.options.map((option, i) => (
      //       <Result option={ option.desc }
      //               votes={ option.votes }
      //               key={ i }
      //               calculateVotes= { () => this.calculateVotes(i) }/>
      //   ))}
      // </div>
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
        console.log(formValues)
      });
      // const firebaseRef = firebase.database().ref('formValues');
      // firebaseRef.on('child_added', (snapshot) => {
      //   const formValue = snapshot.val();
      //   formValue.id = snapshot.key;
      //   this.setState({formvalues: [...this.state.formvalues, formValue]})
      // });
    }
}

export default RenderingForm