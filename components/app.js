import React from 'react';
import Header from './header';
import FormItem from './form';

import Footer from './footer.js';

var App = React.createClass({
    getInitialState: function() {
        return {
        issues: [
          {
            title: 'Let\'s go out!',
            description: 'We are going out like crazyyy people this Monday night, in Oshawa.',
            options: [
              {
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
        ]
      }
    },
    render: function() {
        return (
        <div>
          <Header />
          <form>
            <fieldset>
              <label>Title</label>
              <input type="text" />
            </fieldset>
            <fieldset>
              <label>Description</label>
              <input type="textarea" />
            </fieldset>
            <fieldset>
              <label>Option 1</label>
              <input type="text" />
            </fieldset>
            <fieldset>
              <label>Option 2</label>
              <input type="text" />
            </fieldset>
            <fieldset>
              <label>Option 3</label>
              <input type="text" />
            </fieldset>
            <input type="submit" value="submit" />
          </form>
          <Footer />
        </div>
      )
    }
})

export default App;
