import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';


// Include your React components like this:
import App from './components/app.js';
import SubmissionForm from './components/submissionForm';
import RenderingForm from './components/renderingForm';
import SignIn from './components/signIn';

// import MyComponent from 'components/my_component';
require("file-loader?name=[name].[ext]!./index.html");
require("./styles.scss");

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={SubmissionForm} />
            <Route path='signin' component={ SignIn } />
            <Route path='renderingformid=*' component={ RenderingForm } />
        </Route>
    </Router>,
    document.getElementById("placeholder")
);
