import React from 'react';
import firebase from 'firebase';

class Form extends React.Component {
    constructor() {
        super();
        this.updateFormObject = this.updateFormObject.bind(this);
        this.updateOptionsValues = this.updateOptionsValues.bind(this);
        this.addAnOption = this.addAnOption.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        return <form>

            <fieldset>
                <label>Title</label>
                <input type="textarea"
                        name="title"
                        onChange={ (evt) => this.updateFormObject(evt) }
                        value={ this.props.formObject.title }/>
            </fieldset>

            <fieldset>
                <label>Description</label>
                <input type="textarea"
                        name="desc"
                        onChange={ (evt) => this.updateFormObject(evt) }
                        value={ this.props.formObject.desc }/>
            </fieldset>

            {this.props.formObject.options.map((option, i) => (
                <fieldset key={ i }>
                    <label>Option { i + 1 }</label>
                    <input type="textarea"
                            name={ i }
                            onChange={ (evt) => this.updateOptionsValues(evt) }
                            value={ option.desc }/>
                </fieldset>
            ))}

            <fieldset>
                <input type="textarea"
                        name="newOption"
                        onChange={ (evt) => this.updateFormObject(evt) }
                        value={ this.props.formObject.newOption }/>
                <button onClick={(evt) => this.addAnOption(evt)}>Add an option</button>
            </fieldset>

            <button onClick={ (evt) => this.onSubmit(evt)}>Submit</button>

        </form>
    }

    updateFormObject(evt) {
        let input = evt.target;
        let formValues = Object.assign( this.props.formObject );
        formValues[input.name] = input.value;
        this.props.updateForm(formValues)
    }

    updateOptionsValues(evt) {
        let input = evt.target;
        let formValues = Object.assign(this.props.formObject);

        formValues.options[input.name].desc = input.value;
        this.props.updateForm(formValues)
    }

    addAnOption(evt) {
        evt.preventDefault();
        let inputValue = evt.target.value;
        let formValues = Object.assign(this.props.formObject);

        formValues.options.push({'desc': formValues.newOption, 'votes': 0});
        formValues.newOption = '';
        this.props.updateForm(formValues)
    }

    onSubmit(evt) {
        evt.preventDefault();
        const formValues = Object.assign(this.props.formObject);
        delete formValues.newOption
        const firebaseRef = firebase.database().ref('formValues');
        firebaseRef.push(formValues)
    }
};

export default Form;
