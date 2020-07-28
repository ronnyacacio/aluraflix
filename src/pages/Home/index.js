import React from 'react';

import api from '../../services/api.json';
import { Header, BannerMain, Carousel, Footer } from '../../components';
import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <Header />

      <BannerMain
        videoTitle={api.categorias[0].videos[0].titulo}
        url={api.categorias[0].videos[0].url}
        videoDescription={
          'O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!'
        }
      />

      <Carousel ignoreFirstVideo category={api.categorias[0]} />

      <Carousel category={api.categorias[1]} />

      <Carousel category={api.categorias[2]} />

      <Carousel category={api.categorias[3]} />

      <Carousel category={api.categorias[4]} />

      <Carousel category={api.categorias[5]} />

      <Footer />
    </Container>
  );
}
