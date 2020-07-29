import React from 'react';

import { Header, Footer } from '../../components';
import { Container } from './styles';

export default function Default({ children }) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  );
}
