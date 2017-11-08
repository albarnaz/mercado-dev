import React, { Component } from 'react';

import Footer from './../components/Footer';
import HeaderInterno from './../components/HeaderInterno';
import base, { storage } from './../configs/base';

class NovoAnuncio extends Component {
  constructor(props) {
    super(props);

    this.enviarAnuncio = this.enviarAnuncio.bind(this);
  }

  enviarAnuncio(event) {
    event.preventDefault();

    const file = this.foto.files[0];
    const { name } = file;
    const ref = storage.ref(name);

    ref
      .put(file)
      .then(img => {
        const anuncio = {
          nome: this.nome.value,
          foto: img.metadata.downloadURLs[0],
          descricao: this.descricao.value,
          preco: this.preco.value,
          telefone: this.telefone.value,
          vendedor: this.vendedor.value
        };

        base.push('anuncios', {
          data: anuncio
        }, (error) => {
          console.log(error);
        });
      });
  }

  render() {
    return (
      <div>
        <HeaderInterno />
        <div className='container' style={{ paddingTop: '120px' }}>
          <h3>Novo Anúncio</h3>
          <form onSubmit={ this.enviarAnuncio }>
          <div className='form-group'>
            <label>Foto</label>
            <input type='file' className='form-control' ref={ (ref) => this.foto = ref } />
          </div>
            <div className='form-group'>
              <label>Nome</label>
              <input type='text' className='form-control' placeholder='Nome' ref={ (ref) => this.nome = ref } />
            </div>
            <div className='form-group'>
              <label>Descrição</label>
              <input type='text' className='form-control' placeholder='Descrição' ref={ (ref) => this.descricao = ref } />
            </div>
            <div className='form-group'>
              <label>Preço</label>
              <input type='text' className='form-control' placeholder='Preço' ref={ (ref) => this.preco = ref } />
            </div>
            <div className='form-group'>
              <label>Telefone</label>
              <input type='text' className='form-control' placeholder='Telefone' ref={ (ref) => this.telefone = ref } />
            </div>
            <div className='form-group'>
              <label>Vendedor</label>
              <input type='text' className='form-control' placeholder='Vendedor' ref={ (ref) => this.vendedor = ref } />
            </div>
            <button type='submit' className='btn btn-primary'>Salvar</button>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default NovoAnuncio;
