import styled, {injectGlobal} from 'styled-components';
import Neucha from '../assets/fonts/Neucha/Neucha.ttf';

injectGlobal`
  @font-face {
    font-family: 'Neucha';
    src: url(${Neucha}) format('truetype');
  }
  body {
    margin: 0;
    padding: 0;
  }
`;

const Root = styled.main`
  position: relative;
  font-size: medium;
  font-family: 'Neucha';
`;

export default Root;
