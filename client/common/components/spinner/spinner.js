import React from 'react';
import {Container, WaveBlock, Overlay} from './spinner-styled';

const Spinner = () => (
  <Overlay>
    <Container>
      {Array(16).fill().map((_, i) => (<WaveBlock key={i} />)) /* eslint-disable-line */ }
    </Container>
  </Overlay>);

export default Spinner;
