import React from 'react';
import {Fieldset, Field, createValue} from 'react-forms'

import Header from './header';
import FormItem from './form';
import Footer from './footer.js';

class App extends React.Component{
  constructor() {
    super();
    let issues = [
      {
        title: 'Let\'s go out!',
        description: 'We are going out like crazyyy people this Monday night, in Oshawa.',
        options: [
          {
            title: 'Option1 is this',
            votes: 0
          },
          {
            title: 'Option2 is this',
            votes: 3
          },
          {
            title: 'Option3 is this',
            votes: 2
          }
        ]
      }
    ];
    this.state = {issues};
  }

  render() {
      return (
        <Form />  
    )
  }
}

class Form extends React.Component {

  constructor(props) {
    super(props)
    let formValue = createValue({
      value: props.value,
      onChange: this.onChange.bind(this)
    })
    this.state = {formValue}
  }

  render() {
    return (
      <Fieldset formValue={this.state.formValue}>
        <Field select="Title" label="Title" />
        <Field select="textarea" label="textarea" />
        <Field select="Option1" label="Option 1" />
        <Field select="Option3" label="Option 2" />
        <Field select="Option3" label="Option 3" />
        <input type="submit" />
      </Fieldset>
    )
  }

  onChange(formValue) {
    this.setState({formValue})
  }
};

export default App;
