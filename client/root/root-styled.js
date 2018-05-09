import 'client/assets/normalize.css';
import styled, {injectGlobal} from 'styled-components';
import PtSansNarrow from 'client/assets/fonts/PTSansNarrow/PT_Sans-Narrow-Web-Regular.ttf';
import PtSansNarrowBold from 'client/assets/fonts/PTSansNarrow/PT_Sans-Narrow-Web-Bold.ttf';
import LatoBold from 'client/assets/fonts/Lato/Lato-Bold.ttf';
import LatoBoldItalic from 'client/assets/fonts/Lato/Lato-BoldItalic.ttf';
import LatoHairline from 'client/assets/fonts/Lato/Lato-Hairline.ttf';
import LatoHairlineItalic from 'client/assets/fonts/Lato/Lato-HairlineItalic.ttf';
import LatoItalic from 'client/assets/fonts/Lato/Lato-Italic.ttf';
import LatoLight from 'client/assets/fonts/Lato/Lato-Light.ttf';
import LatoLightItalic from 'client/assets/fonts/Lato/Lato-LightItalic.ttf';
import LatoRegular from 'client/assets/fonts/Lato/Lato-Regular.ttf';

/* eslint-disable */
injectGlobal`
  @font-face {
    font-family: 'PT Sans Narrow';
    src: url(${PtSansNarrow}) format('truetype');
  }

  @font-face {
    font-family: 'PT Sans Narrow Bold';
    font-weight: bold;
    src: url(${PtSansNarrowBold}) format('truetype');
  }

  @font-face {
    font-family: 'Lato', sans-serif;
    font-weight: 100;
    src: url(${LatoLight}) format('truetype');
  }

  @font-face {
    font-family: 'Lato', sans-serif;
    font-weight: 100;
    font-style: italic;
    src: url(${LatoLightItalic}) format('truetype');
  }

  @font-face {
    font-family: 'Lato', sans-serif;
    src: url(${LatoRegular}) format('truetype');
  }

  @font-face {
    font-family: 'Lato', sans-serif;
    font-style: italic;
    src: url(${LatoItalic}) format('truetype');
  }

  @font-face {
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    src: url(${LatoHairline}) format('truetype');
  }

  @font-face {
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    font-style: italic;
    src: url(${LatoHairlineItalic}) format('truetype');
  }

  @font-face {
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    src: url(${LatoBold}) format('truetype');
  }

  @font-face {
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    font-style: italic;
    src: url(${LatoBoldItalic}) format('truetype');
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
  overflow: auto;
`;

export default Root;
