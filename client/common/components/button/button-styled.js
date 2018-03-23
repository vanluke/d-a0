import styled from 'styled-components';
import {
  springgreen,
  darkblue,
  smoke,
} from 'client/assets/palette/palette';

export const Button = styled.button`
  position: relative;
  display: block;
  padding: 0;
  overflow: hidden;
  border-width: 0;
  outline: none;
  border-radius: 2px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
  background-color: ${props => (props.primary ? darkblue : springgreen)};
  transition: background-color .3s;
  color: ${smoke};
`;

export const Text = styled.span`
  display: block;
  padding: 12px 24px;
`;
