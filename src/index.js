import React, {Component} from 'react'
import { render } from 'react-dom'
import {App} from './components/App-ES6'

window.React = React

render(
    <App />,
	document.getElementById('react-container')
)