import React, { Component } from 'react';

class App extends Component {

  render() {
    const logoPath = './src/logo.svg'
    return (
      <div className="App">
        <header className="App-header">
          <img src={logoPath} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}


export default App;
