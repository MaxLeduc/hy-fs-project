import React from 'react';
import Header from './header';

var App = React.createClass({
  getInitialState: function () {
    return {
      ballots: [
        {
          title: 'Let\'s go out!',
          description: 'We are going out like crazyyy people this Monday night, in Oshawa.',
          options: [
            {
              title: 'Option1 is this',
              votes: 0
            },
            {
              title: 'Option1 is this',
              votes: 3
            },
            {
              title: 'Option1 is this',
              votes: 2
            }
          ]
        }
      ]
    }
  },

  render: function () {
    return <div>
		<Header />
	</div>
  }
})

export default App;
