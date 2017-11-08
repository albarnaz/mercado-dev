import React from 'react';

const Categoria = (props) => {
  return (
    <a to={`/anuncios/categoria/`} className='btn btn-secondary h-100 m-2 col-sm'>
      <i className={`fa ${props.attrs.icon} fa-4x`} aria-hidden='true'></i><br />
      { props.attrs.categoria }
    </a>
  );
}

export default Categoria;
