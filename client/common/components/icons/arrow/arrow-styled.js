import styled from 'styled-components';
import {radicalred} from 'client/assets/palette/palette';

export const ArrowSvg = styled.svg`
  opacity: 0;
  order: -1;
  position: relative;
  overflow: visible;
  top: 25px;
  left: -18px;
  transition: all .2s ease-in-out;
  transform: translateX(-100%);
  width: 16px;
  height: 16px;
`;

export const ArrowPath = styled.path`
  fill: none;
  stroke: ${radicalred};
  stroke-width: 2px;
`;
