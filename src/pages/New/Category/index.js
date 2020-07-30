import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Field, Button } from '../../../components';
import Default from '../../../layouts/Default';

export default function Category() {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState({
    name: '',
    description: '',
    color: '#2A7AE4',
  });

  function handleInputChange(e) {
    const { name, value } = e.target;

    setNewCategory((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCategories((prevState) => [...prevState, newCategory]);
    setNewCategory({
      name: '',
      description: '',
      color: '#2A7AE4',
    });
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

      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category.name}</li>
        ))}
      </ul>

      <Link to="/">Ir para home</Link>
    </Default>
  );
}
