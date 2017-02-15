import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';


// Include your React components like this:
import App from './components/app.js';
import Form from './components/form';

// import MyComponent from 'components/my_component';
require("file-loader?name=[name].[ext]!./index.html");
require("./styles.scss");

ReactDOM.render(
    <App />,
    document.getElementById("placeholder")
);
