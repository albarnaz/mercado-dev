import React from 'react';
import { Link } from 'react-router-dom';

const AnuncioHome = (props) => {
  return (
    <div className='col-lg-4 col-md-6 mb-4'>
      <div className='card h-100'>
        <Link to='/novo-anuncio'>
          <img className='card-img-top' src={ props.attrs.foto } alt='foto' />
        </Link>
        <div className='card-body'>
          <h4 className='card-title'>
            <Link to={`/anuncios/ver/`}>{ props.attrs.nome }</Link>
          </h4>
          <h5>{ props.attrs.preco }</h5>
          <p className='card-text'>{ props.attrs.descricao }</p>
        </div>
      </div>
    </div>
  );
}

export default AnuncioHome;
