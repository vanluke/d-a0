import React from 'react';
import Panormaic from 'client/assets/images/panoramic-3227796_1920.jpg';
import {
  Img,
  Container,
  Header,
  ImageGroup,
  BouncingArrow,
} from './landing-styled';

const Landing = () => (
  <Container>
    <ImageGroup>
      <Img src={Panormaic} alt="Trust me" />
      <Header>Welcome!</Header>
      <BouncingArrow />
    </ImageGroup>
  </Container>
);

export default Landing;
