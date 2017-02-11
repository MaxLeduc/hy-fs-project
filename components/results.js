import React from 'react';

class Result extends React.Component {
    render() {
        return (
            <div key={ this.props.datakey } className="results">
                <button className="result1" onClick={ () => this.props.calculateVotes() }>{ this.props.option }</button>
                <span className="voteCount">{ this.props.votes }</span>
            </div>
        )
    }
}

export default Result;
