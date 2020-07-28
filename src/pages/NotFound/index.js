import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function NotFound() {
  return (
    <Container>
      <h1>Ops, quebrou tudo :O</h1>
      <p>
        <Link to="/">Você pode jogar ou voltar pra home :{')'}</Link>
      </p>
      <p>
        Ou{' '}
        <a href="https://www.youtube.com/watch?v=jOAU81jdi-c&list=PLTcmLKdIkOWmeNferJ292VYKBXydGeDej">
          aprender a fazer o jogo
        </a>
      </p>
      <iframe
        title="Flappy Bird Game"
        src="https://mariosouto.com/flappy-bird-devsoutinho/"
        width="340"
        height="600"
      />
    </Container>
  );
}
