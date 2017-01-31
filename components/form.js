import React from 'react';

var FormItem = React.createClass({
    render: function(){
        return <div className="form-item" key={this.props.key}>
            <label for={ "option" + this.props.key }>{ this.props.title }</label>
            <input type="checkbox" id={ "option" + this.props.key } />
        </div>
    }
})

export default FormItem;
