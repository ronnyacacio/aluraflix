import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../../services/api';
import { useForm } from '../../../hooks/useForm';
import { Field, Button } from '../../../components';
import Default from '../../../layouts/Default';

export default function Video() {
  const [categories, setCategories] = useState([]);
  const [titlesCategory, setTitlesCategory] = useState([]);

  const [newVideo, handleInputChange, clearForm] = useForm({
    category: '',
    title: '',
    url: '',
  });

  useEffect(() => {
    (async function loadCategories() {
      const response = await api.get('categories');

      setCategories(response.data);
    })();
    const titles = categories.map((category) => category.title);
    setTitlesCategory(titles);
  }, [categories]);

  async function handleSubmit(e) {
    e.preventDefault();

    const { title, url, category } = newVideo;

    const { id } = categories.find((cat) => cat.title === category);

    const data = {
      title,
      url,
      category_id: id,
    };

    await api.post('videos', data);

    clearForm();
  }

  return (
    <Default>
      <h1>Cadastro de Vídeo</h1>
      {newVideo && (
        <form onSubmit={handleSubmit}>
          <Field
            label="Título do vídeo"
            type="text"
            name="title"
            value={newVideo.title}
            onChange={handleInputChange}
          />

          <Field
            label="URL do vídeo"
            type="text"
            name="url"
            value={newVideo.url}
            onChange={handleInputChange}
          />

          <Field
            label="Categoria do vídeo"
            type="text"
            name="category"
            value={newVideo.category}
            onChange={handleInputChange}
            suggestions={titlesCategory}
          />

          <Button type="submit">Cadastrar vídeo</Button>
          <Button type="submit" style={{ marginLeft: 20 }}>
            <Link to="/new/category">Criar categoria</Link>
          </Button>
        </form>
      )}
    </Default>
  );
}
