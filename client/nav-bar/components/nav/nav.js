import React from 'react';
import UserNav from 'client/nav-bar/with-state/nav-bar-branch';
import {
  Nav,
  NavList,
  NavItem,
  NavItemRight,
  Link,
} from './nav-styled';

const Navigation = () => (
  <Nav>
    <NavList>
      <NavItem>
        <Link to="/home">home</Link>
      </NavItem>
      <NavItem>
        <Link to="/posts">posts</Link>
      </NavItem>
      <NavItemRight>
        <UserNav />
      </NavItemRight>
    </NavList>
  </Nav>);

export default Navigation;
