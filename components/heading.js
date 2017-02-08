import React from 'react';

class Heading extends React.Component{
    render() {
        return <div>
            <h2>{ this.props.title }</h2>
            <h3>{ this.props.desc }</h3>
        </div>
    }
}

export default Heading
