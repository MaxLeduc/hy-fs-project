import React from 'react';

import firebase from 'firebase';

export default class Preview extends React.Component{
    constructor() {
        super();
    }

    render() {
        return <div key= { this.props.datakey }>
            <span onClick={ (evt) => {this.props.setTheUser(this.props.optionKey)} }>{ this.props.option }</span>
            <span> { this.props.votes ? this.props.votes.length - 1 : null}</span>
        </div>
    }
}
