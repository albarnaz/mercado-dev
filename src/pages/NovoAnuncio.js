import React, { Component } from 'react';

import Footer from './../components/Footer';
import HeaderInterno from './../components/HeaderInterno';

class NovoAnuncio extends Component {
  render() {
    return (
      <div>
        <HeaderInterno />
        <div className='container' style={{ paddingTop: '120px' }}>
          <h3>Novo Anúncio</h3>
          <form onSubmit={null}>
            <div className='form-group'>
              <label>Nome</label>
              <input type='text' className='form-control' placeholder='Nome' />
            </div>
            <div className='form-group'>
              <label>Descrição</label>
              <input type='text' className='form-control' placeholder='Descrição' />
            </div>
            <div className='form-group'>
              <label>Preço</label>
              <input type='text' className='form-control' placeholder='Preço' />
            </div>
            <div className='form-group'>
              <label>Telefone</label>
              <input type='text' className='form-control' placeholder='Telefone' />
            </div>
            <div className='form-group'>
              <label>Vendedor</label>
              <input type='text' className='form-control' placeholder='Vendedor' />
            </div>
            <button type='sumit' className='btn btn-primary'>Salvar</button>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default NovoAnuncio;
