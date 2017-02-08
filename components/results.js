import React from 'react';

class Result extends React.Component {
    render() {
        return (
            <div data-key={ this.props.key } className="results">
                <button className="result1" onClick={ () => this.props.calculateVotes() }>{ this.props.option }</button>
                <span className="voteCount">{ this.props.votes }</span>
            </div>
        )
    }
}

export default Result;
