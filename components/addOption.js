import React from 'react';

class AddOption extends React.Component {
    constructor() {
        super();

        this.newOption = this.newOption.bind(this)
    }

    newOption(e) {
        e.preventDefault();
        let newOption = {};
        let options = this.props.options;
        const optionValue = this.refs.optionValue.value;

        if(optionValue.length > 0) {
            this.refs.optionValue.value ='';
            newOption.desc = optionValue;
            newOption.votes = 0;
            options.push(newOption);
            this.props.newOption(options)
        }
    }

    render() {
        return <form>
            <input type="text"
                className="form-control"
                placeholder="Add a new option"
                ref="optionValue" />
            <span className="input-group-btn">
                <button className="btn btn-primary"
                    type="button"
                    onClick={ (e) => this.newOption(e)}>Add</button>
            </span>
        </form>
    }
}

export default AddOption;
