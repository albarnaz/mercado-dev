import React from 'react';

const AnuncioHome = (props) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100">
        <a href="#"><img className="card-img-top" src={ props.attrs.foto } alt="foto" /></a>
        <div className="card-body">
          <h4 className="card-title">
            <a to={`/anuncios/ver/`}>{ props.attrs.nome }</a>
          </h4>
          <h5>{ props.attrs.preco }</h5>
          <p className="card-text">{ props.attrs.descricao }</p>
        </div>
      </div>
    </div>
  );
}

export default AnuncioHome;
