import React from 'react';

class FormHeading extends React.Component{
    render() {
        return <div>
            <h2 className="renderingForm-title">{ this.props.title }</h2>
            <h3>{ this.props.desc }</h3>
            <p className="renderingForm-tag">Click on one of the following options in order to vote:</p>
        </div>
    }
}

export default FormHeading
