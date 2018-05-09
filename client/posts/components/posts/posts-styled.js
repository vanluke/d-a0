import styled from 'styled-components';
import {media} from 'client/common/utils/styles';

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;

  ${media.tablet`
    width: 70%;
    margin: auto;
  `}
`;

export const ListItem = styled.li`
  margin: 0;
  padding: 15px;
`;

export const Container = styled.section`
  position: relative;
`;
