import React from 'react';
import { Link } from 'react-router-dom';

import Default from '../../../layouts/Default';

export default function Video() {
  return (
    <Default>
      <h1>Cadastro de Vídeo</h1>

      <Link to="/new/category">Cadastrar Categoria</Link>
    </Default>
  );
}
