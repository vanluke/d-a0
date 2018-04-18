import React from 'react';
import UserNav from 'client/nav-bar/with-state/nav-bar-branch';
import {
  Nav,
  NavList,
  NavItem,
  NavItemRight,
  Link as Anchor,
} from './nav-styled';

const Navigation = () => (
  <Nav>
    <NavList>
      <NavItem>
        <Anchor to="/home">home</Anchor>
      </NavItem>
      <NavItem>
        <Anchor to="/posts">posts</Anchor>
      </NavItem>
      <NavItemRight>
        <UserNav />
      </NavItemRight>
    </NavList>
  </Nav>);

export default Navigation;
