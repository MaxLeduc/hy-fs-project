import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';


// Include your React components like this:
import App from './components/app.js';
import RenderingForm from './components/renderingForm';
import SignIn from './components/signIn';

// import MyComponent from 'components/my_component';
require("file?name=[name].[ext]!./index.html");
require("!style-loader!css-loader!sass-loader!./styles.scss");

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/'>
            <IndexRoute component={App} />
            <Route path='signin' component={ SignIn } />
            <Route path='renderingformid=*' component={ RenderingForm } />
        </Route>
    </Router>,
    document.getElementById("placeholder")
);
