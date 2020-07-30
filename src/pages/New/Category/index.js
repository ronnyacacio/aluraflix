import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// import api from '../../../services/api';
import { Field, Button } from '../../../components';
import Default from '../../../layouts/Default';

export default function Category() {
  const [newCategory, setNewCategory] = useState({
    name: '',
    description: '',
    color: '#2A7AE4',
  });

  function handleInputChange(e) {
    const { name, value } = e.target;

    setNewCategory((prevState) => ({ ...prevState, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Default>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={handleSubmit}>
        <Field
          label="Nome da Categoria"
          type="text"
          name="name"
          value={newCategory.name}
          onChange={handleInputChange}
        />

        <Field
          label="Descrição"
          type="textarea"
          name="description"
          value={newCategory.description}
          onChange={handleInputChange}
        />

        <Field
          label="Cor"
          type="color"
          name="color"
          value={newCategory.color}
          onChange={handleInputChange}
        />

        <Button type="submit">Cadastrar</Button>
      </form>
      <Link to="/">Ir para home</Link>
    </Default>
  );
}
