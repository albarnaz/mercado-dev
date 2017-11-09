import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './pages/Home';
import NovoAnuncio from './pages/NovoAnuncio';
import base from './configs/base';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categorias: []
    };

    base.bindToState('categorias', {
      context: this,
      state: 'categorias'
    });
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <Route path='/' exact render={ () => <Home categorias={this.state.categorias} /> } />
          <Route path='/novo-anuncio' exact render={ () => <NovoAnuncio categorias={this.state.categorias} /> } />
        </div>
      </Router>
    );
  }
}

export default App;
