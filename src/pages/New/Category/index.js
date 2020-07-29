import React from 'react';
import { Link } from 'react-router-dom';

import Default from '../../../layouts/Default';

export default function Category() {
  return (
    <Default>
      <h1>Cadastro de Categoria</h1>

      <form>
        <label>
          Nome da Categoria:
          <input type="text" />
        </label>

        <button>Cadastrar</button>
      </form>

      <Link to="/">Ir para home</Link>
    </Default>
  );
}
