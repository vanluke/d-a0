import 'client/assets/normalize.css';
import styled, {injectGlobal} from 'styled-components';
import PtSansNarrow from 'client/assets/fonts/PTSansNarrow/PT_Sans-Narrow-Web-Regular.ttf';
import PtSansNarrowBold from 'client/assets/fonts/PTSansNarrow/PT_Sans-Narrow-Web-Bold.ttf';

/* eslint-disable */
injectGlobal`
  @font-face {
    font-family: 'PT Sans Narrow';
    src: url(${PtSansNarrow}) format('truetype');
  }

  @font-face {
    font-family: 'PT Sans Narrow';
    font-wight: bold;
    src: url(${PtSansNarrowBold}) format('truetype');
  }

  body {
    margin: 0;
    padding: 0;
  }
`;
/* eslint-enable */

const Root = styled.main`
  position: relative;
  font-size: medium;
  font-family: 'PT Sans Narrow', sans-serif;
  height: 100vh;
`;

export default Root;
