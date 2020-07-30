import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import { Header, BannerMain, Carousel, Footer } from '../../components';
import { Container } from './styles';

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [video, setVideo] = useState(null);

  useEffect(() => {
    (async function loadData() {
      const [responseCategory, responseVideo] = await Promise.all([
        api.get('categories'),
        api.get('videos/2'),
      ]);
      setCategories(responseCategory.data);
      setVideo(responseVideo.data);
    })();
  }, []);

  return (
    <Container>
      <Header />

      {video && categories && (
        <>
          <BannerMain
            videoTitle={video.title}
            url={video.url}
            videoDescription={
              'O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!'
            }
          />

          <Carousel ignoreFirstVideo category={categories[0]} />

          {categories.map((category) => (
            <Carousel key={category.id} category={category} />
          ))}
        </>
      )}

      <Footer />
    </Container>
  );
}
