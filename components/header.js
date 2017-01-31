import React from 'react';

var Header = React.createClass({
    getInitialState: function() {
        return {
            'name': 'World\'s Greatest Voting App',
            'makers': [
                {
                    name: 'Joy Liu',
                    twitter: 'joykliu'
                },
                {
                    name: 'Maxime Leduc',
                    twitter: 'ledukeness'
                }
            ]
        }
    },
    render: function() {
        return <header>
            <h1>{this.state.name}</h1>
        <h3>Made by the coolest developers you'll ever know, <a href={"https://twitter.com/" + this.state.makers[0].twitter}>{this.state.makers[0].name}</a> and <a href={"https://twitter.com/" + this.state.makers[1].twitter}>{this.state.makers[1].name}</a>  </h3>
        </header>
    }
})
export default Header;
