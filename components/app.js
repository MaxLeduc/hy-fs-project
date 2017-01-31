import React from 'react';
import Header from './header';
import FormItem from './form';

var App = React.createClass({
    getInitialState: function() {
        return {
            title: 'Let\'s go out!',
            description: 'We are going out like crazyyy people this Monday night, in Oshawa.',
            options: [{
                    title: 'Option1 is this',
                    votes: 0
                },
                {
                    title: 'Option2 is this',
                    votes: 3
                },
                {
                    title: 'Option3 is this',
                    votes: 2
                }
            ]
        }
    },
    render: function() {
        return <div>
            <Header />
            { this.state.options.map((option, i) => <FormItem title={ option.title } votes={ option.votes } key={ i }/>)}
        </div>
    }
})

export default App;
