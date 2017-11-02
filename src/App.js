import React, { Component } from 'react';

import HeaderHome from './components/HeaderHome';
import AnuncioHome from './components/AnuncioHome';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderHome />
        <div className="container">
          <AnuncioHome />
          <AnuncioHome />
          <AnuncioHome />
        </div>
      </div>
    );
  }
}

export default App;
