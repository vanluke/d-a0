import styled from 'styled-components';
import {radicalred, silver} from 'client/assets/palette/palette';

export const LineSvg = styled.svg`
  width: 100%;
  height: 2px;
  stroke: ${silver};
`;

export const Path = styled.path`
  position: relative;
`;

export const FocusPath = styled.path`
  stroke: ${radicalred};
  stroke-dasharray: 40;
  stroke-dashoffset: 40;
  transition: all 0.4s cubic-bezier(0, 1, 1, 1);
`;
