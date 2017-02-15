import React from 'react';
import firebase from 'firebase';

class Result extends React.Component {
    constructor() {
        super();
        this.state = {
            formObject: []
        }
    }

    render() {
        return <div> {console.log(this.state.formObject)} reuslts component</div>
        return (
            <div key={ this.props.datakey } className="results">
                <button className="result1" onClick={ () => this.props.calculateVotes() }>{ this.props.option }</button>
                <span className="voteCount">{ this.props.votes }</span>
            </div>
        )
    }

    componentDidMount() {
      const allOFirebase = firebase.database().ref();
      allOFirebase.on('value', (snapshot) => {
        const formValues = snapshot.val();
        this.setState({
            formObject: formValues
        })
      });
    }
}

export default Result;
