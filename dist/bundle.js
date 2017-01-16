"use strict";

var _React = React,
    createElement = _React.createElement;
var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;


var App = function App() {
    return React.createElement(
        "h1",
        { id: "title", className: "header" },
        "hello world!"
    );
};

render(React.createElement(App, { text: "Hello World" }), document.getElementById('react-container'));
