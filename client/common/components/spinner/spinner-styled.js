import styled, {keyframes} from 'styled-components';
import {red, white} from 'client/assets/palette/palette';

const wave = keyframes`
  0% {
    top: 0;
    opacity: 1;
  }

  50% {
    top: 30px;
    opacity: .2;
  }

  100% {
    top: 0;
    opacity: 1;
  }
`;

export const Overlay = styled.section`
  position: fixed;
  left: 0;
  bottom: 0;
  top: 0;
  background: ${red};
  width: 100%;
  height: 100vh;
`;

export const Container = styled.div`
  width: 80px;
  height: 100px;
  margin: 100px auto;
  margin-top: calc(100vh / 2 - 50px);
`;

export const WaveBlock = styled.div`
  position: relative;
  box-sizing: border-box;
  float: left;
  margin: 0 10px 10px 0;
  width: 12px;
  height: 12px;
  border-radius: 3px;
  background: ${white};
  &:nth-child(4n+1) { animation: ${wave} 2s ease 0s infinite; }
  &:nth-child(4n+2) { animation: ${wave} 2s ease .2s infinite; }
  &:nth-child(4n+3) { animation: ${wave} 2s ease .4s infinite; }
  &:nth-child(4n+4) { animation: ${wave} 2s ease .6s infinite; margin-right: 0; }
`;
