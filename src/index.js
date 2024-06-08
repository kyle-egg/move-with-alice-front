import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.scss'
import App from './App'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

// loads the Icon plugin
UIkit.use(Icons)

// // components can be called from the imported UIkit reference
// UIkit.notification('Hello world.')

ReactDOM.render(<App />, document.getElementById('root'))
