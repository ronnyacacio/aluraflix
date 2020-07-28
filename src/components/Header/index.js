import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '..';
import logo from '../../assets/logo.png';
import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Aluraflix" />
      </Link>
      <Link to="/">
        <Button>Novo vídeo</Button>
      </Link>
    </Container>
  );
}
