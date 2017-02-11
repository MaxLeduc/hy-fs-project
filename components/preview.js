import React from 'react';
import Heading from './heading';

class Preview extends React.Component{
    render() {
        return <div key= { this.props.datakey }>
            <p>{ this.props.option }</p>
        </div>
    }
}

export default Preview
