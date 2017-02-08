import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';


// Include your React components like this:
import App from './components/app.js';
import Form from './components/form';

// import MyComponent from 'components/my_component';
require("file?name=[name].[ext]!./index.html");
require("!style-loader!css-loader!sass-loader!./styles.scss");

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={ App }>
            <Route path="main" component={ Form } />
        </Route>
    </Router>,
    document.getElementById("placeholder")
);
