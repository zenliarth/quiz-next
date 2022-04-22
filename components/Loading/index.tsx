import React from 'react';
import { Container, Spinner } from './style';

interface IProps {
  isLoading: boolean;
}


function Loading({ isLoading }: IProps): JSX.Element {
  return (
    <Container
      style={{ display: isLoading ? 'flex' : 'none' }}
      aria-label="Carregando..."
    >
      <Spinner />
    </Container>
  );
}

export default Loading;
