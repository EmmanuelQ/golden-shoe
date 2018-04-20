import React, { Component } from 'react'
import Toolbar from './Toolbar/index'
import PDP from './PDP/index';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Toolbar />
        <PDP />
      </div>
    )
  }
}

export default App;
