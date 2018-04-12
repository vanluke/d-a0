import styled from 'styled-components';
import {white, sunsetorange, orangered} from 'client/assets/palette/palette';

export const LoginButton = styled.a`
  text-decoration: none;
  box-sizing: border-box;
  border-width: 2px;
  font-size: 12px;
  font-weight: 600;
  padding: .5rem 18px;
  line-height: 1.75;
  cursor: pointer;
  text-transform: uppercase;
  color: ${white};
  opacity: 1;
  filter: opacity(100);
  transition: all 150ms linear;
  background-color: ${sunsetorange};
  border-color: ${sunsetorange};
  border-radius: 30px;

  &:hover,
  &:focus,
  &active {
    background-color: ${orangered};
    color: ${white};
    border-color: ${orangered};
  }
`;
