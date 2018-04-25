import styled from 'styled-components';
import {smoke, black} from 'client/assets/palette/palette';

export const Button = styled.div`
  display: inline-block;
  padding: 10px;
  margin: 10px;
  border-bottom: 4px solid;
  border-bottom-color: ${smoke};
  cursor: pointer;
  border-bottom-color: ${props => (props.active ? black : smoke)};

  &:disabled {
    opacity: .25;
    cursor: default;
  }
`;

export const Panels = styled.section`
  padding: 10px;
`;

export const Panel = styled.article`
  position: relative;
`;

export const List = styled.div`
  position: relative;
`;
