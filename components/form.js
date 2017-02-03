import React from 'react';

class FormItem extends React.Component {
    render() {
        return (
        	<div className="form-item" data-index={this.props.indexNumber}>
                <h2>Here are the results</h2>
	            <label htmlFor={ "option" + this.props.indexNumber }>{ this.props.title }</label>
	            <input type="checkbox" id={ "option" + this.props.indexNumber } />
        	</div>
        )
    }
}

export default FormItem;
