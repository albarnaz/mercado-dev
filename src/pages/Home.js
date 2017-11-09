import React, { Component } from 'react';

import HeaderHome from './../components/HeaderHome';
import AnuncioHome from './../components/AnuncioHome';
import Footer from './../components/Footer';
import Categoria from './../components/Categoria';
import base from './../configs/base';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //categorias: [],
      anuncios: []
    };

    // base.bindToState('categorias', {
    //   context: this,
    //   state: 'categorias'
    // });

    base.bindToState('anuncios', {
      context: this,
      state: 'anuncios',
      queries: {
        limitToLast: 3
      }
    });
  }

  render() {
    return (
      <div>
        <HeaderHome />
        <div className='container'>
          <h3>Últimos Anúncios</h3>
          <div className='row'>
            {
              Object.keys(this.state.anuncios).map(key => {
                  const anuncio = this.state.anuncios[key];
                  return <AnuncioHome key={key} attrs={anuncio} />
              })
            }
          </div>
          <h3>Categorias</h3>
          <div className='row'>
            {
              this.props.categorias.map((categoria, index) => {
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

export default Home;
