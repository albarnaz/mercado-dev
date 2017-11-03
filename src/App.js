import React, { Component } from 'react';

import HeaderHome from './components/HeaderHome';
import AnuncioHome from './components/AnuncioHome';
import Footer from './components/Footer';
import Categoria from './components/Categoria';
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
      <div className="App">
        <HeaderHome />
        <div className="container">
          <h3>Últimos Anúncios</h3>
          <div className="row">
            <AnuncioHome />
            <AnuncioHome />
            <AnuncioHome />
          </div>
          <h3>Categorias</h3>
          <div className="row">
            {
              this.state.categorias.map((categoria, index) => {
                  return <Categoria key={index} attrs={categoria} />
              })
            }
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
