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
  constructor() {
    super();
    this.state = {
      formObject: {
        title: '',
        description: '',
        options: [
          {'description': 'this is an option'},
          {'description': 'another option'}
        ],
        newOption: ''
      }
    };
    this.updateFromObject = this.updateFromObject.bind(this);
    this.updateOptionsValues = this.updateOptionsValues.bind(this);
    this.addAnOption = this.addAnOption.bind(this);
  }

  render() {
    return <form>
      <fieldset>
        <label>Title</label>
        <input type="textarea" name="title" onChange={ (evt) => this.updateFromObject(evt) } value={ this.state.formObject.title } />
      </fieldset>
      <fieldset>
        <label>Description</label>
        <input type="textarea" name="description" onChange={ (evt) => this.updateFromObject(evt) } value={ this.state.formObject.description } />
      </fieldset>
      { this.state.formObject.options.map((option, i) => (
        <fieldset key={i}>
          <label>Option {i + 1}</label>
          <input type="textarea" name={i} onChange={ (evt) => this.updateOptionsValues(evt) } value={option.description} />
        </fieldset>
        ))
      }
      <fieldset>
        <input type="textarea" name="newOption" onChange={ (evt) => this.updateFromObject(evt) } value={ this.state.formObject.newOption }/>
        <button onClick={(evt) => this.addAnOption(evt)}>Add an option</button>
      </fieldset>
      <input type="submit" />
    </form>
  }

  updateFromObject(evt) {
    let input = evt.target;
    let formValues = Object.assign(this.state.formObject);
    formValues[input.name] = input.value;
    this.setState({formObject: formValues});
  }

  updateOptionsValues(evt) {
    let input = evt.target;
    let formValues = Object.assign(this.state.formObject);
    formValues.options[input.name].description = input.value;
    this.setState({formObject: formValues});
  }

  addAnOption(evt) {
    evt.preventDefault();
    let inputValue = evt.target.value;
    let formValues = Object.assign(this.state.formObject);
    formValues.options.push({'description': formValues.newOption});
    formValues.newOption = '';
    this.setState({formObject: formValues});
  }
};

export default App;
