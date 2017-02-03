import React from 'react';
import Header from './header';
import FormItem from './form';
import Result from './results.js';
import Footer from './footer.js';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
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
        };
        this.calculateVotes = this.calculateVotes.bind(this);
    }

    calculateVotes(i) {
        const options = this.state.issues[0].options;
        options[i].votes = options[i].votes + 1;
        this.setState({
            issues: [{
                options: options
            }]
        })
    }

    render() {
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
          { this.state.issues[0].options.map((option, i) => (
              <Result option={ option.title }
                  votes={ option.votes }
                  key = { i }
                  calculateVotes = { () => this.calculateVotes(i) }
              />
          ))}
          <Footer />
        </div>
      )
    }
}

export default App;
