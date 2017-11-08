import React from 'react';
import { Link } from 'react-router-dom';

const Categoria = (props) => {
  return (
    <Link to={`/anuncios/categoria/`} className='btn btn-secondary h-100 m-2 col-sm'>
      <i className={`fa ${props.attrs.icon} fa-4x`} aria-hidden='true'></i><br />
      { props.attrs.categoria }
    </Link>
  );
}

export default Categoria;
