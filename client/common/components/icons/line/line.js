import React from 'react';
import {LineSvg, Path, FocusPath} from './line-styled';

const Line = () => (
  <LineSvg viewBox="0 0 40 2" preserveAspectRatio="none" xmlnsXlink="http://www.w3.org/1999/xlink">
    <Path d="M0 1 L40 1" />
    <FocusPath d="M0 1 L40 1" />
  </LineSvg>
);

export default Line;
