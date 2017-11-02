import React, { Component } from 'react';

import HeaderHome from './components/HeaderHome';
import AnuncioHome from './components/AnuncioHome';
import Footer from './components/Footer';
import Categoria from './components/Categoria';

class App extends Component {
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
            <Categoria attrs={{ categoria: 'Carro', icon: 'fa-car' }} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
