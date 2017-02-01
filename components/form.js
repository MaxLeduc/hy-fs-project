import React from 'react';

var FormItem = React.createClass({
    render: function(){
        return (
        	<div className="form-item" data-index={this.props.indexNumber}>
	            <label htmlFor={ "option" + this.props.indexNumber }>{ this.props.title }</label>
	            <input type="checkbox" id={ "option" + this.props.indexNumber } />
        	</div>
        )
    }
})

export default FormItem;
