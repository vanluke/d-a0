import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {media} from 'client/common/utils';
import {powderblue} from 'client/assets/palette/palette';

export const Nav = styled.nav`
  position: relative;
  width: 100%;
  height: 8%;
  text-align: center;
  z-index: 1;
  background: rgba(0, 0, 0, .4);
  ${media.tablet`
    text-align: left;
  `}
`;
export const NavItem = styled.li`
  padding: 10px;
  display: inline-block;
`;

export const NavItemRight = styled(NavItem)`
  padding: 0;
  margin-right: 10px;

  ${media.tablet`
    float: right;
  `}
`;

export const Link = styled(NavLink)`
  text-decoration: none;

  &.active {
    color: ${powderblue};
  }
`;

export const NavList = styled.ul`
  position: absolute;
  height: 8%;
  width: 100%;
  list-style: none;
  padding: 0;
`;
