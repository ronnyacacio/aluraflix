import React from 'react';

import api from '../../../services/api';
import { useForm } from '../../../hooks/useForm';
import { Field, Button } from '../../../components';
import Default from '../../../layouts/Default';

export default function Category() {
  const [newCategory, handleInputChange, clearForm] = useForm({
    title: '',
    color: '#2A7AE4',
    link_text: '',
    link_url: '',
  });

  async function handleSubmit(e) {
    e.preventDefault();

    const { title, color, link_text, link_url } = newCategory;

    const data = {
      title,
      color,
      link: {
        text: link_text,
        url: link_url,
      },
    };

    await api.post('categories', data);
    clearForm();
  }

  return (
    <Default>
      <h1>Cadastro de Categoria</h1>

      {newCategory && (
        <form onSubmit={handleSubmit}>
          <Field
            label="Nome da Categoria"
            type="text"
            name="title"
            value={newCategory.title}
            onChange={handleInputChange}
          />

          <Field
            label="Cor"
            type="color"
            name="color"
            value={newCategory.color}
            onChange={handleInputChange}
          />

          <Field
            label="Texto do link extra"
            type="text"
            name="link_text"
            value={newCategory.link_text}
            onChange={handleInputChange}
          />

          <Field
            label="Link extra"
            type="text"
            name="link_url"
            value={newCategory.link_url}
            onChange={handleInputChange}
          />

          <Button type="submit">Cadastrar</Button>
        </form>
      )}
    </Default>
  );
}
