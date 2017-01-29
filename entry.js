import React from 'react';
import ReactDOM from 'react-dom';

// Include your React components like this:
import App from './components/app.js'

// import MyComponent from 'components/my_component';
require("file?name=[name].[ext]!./index.html");
require("!css-loader!sass-loader!./styles.scss");

ReactDOM.render(<App />, document.getElementById("placeholder"));
