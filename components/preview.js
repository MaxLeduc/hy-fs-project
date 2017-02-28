import React from 'react';

import firebase from 'firebase';

export default class Preview extends React.Component{
    constructor() {
        super();
    }

    render() {
        return <div key= { this.props.datakey }>
        	<div className="optionRendering">
            	<span onClick={ (evt) => {this.props.setTheUser(this.props.optionKey)} }>{ this.props.option ? this.props.option : 'Description of this option!' }</span>
            </div>
            <span className="display-number-votes"> Number of votes for this option: <h2 className="renderingForm-numOfVotes">{ this.props.votes ? this.props.votes.length - 1 : 'X'}</h2></span>
        </div>
    }
}
