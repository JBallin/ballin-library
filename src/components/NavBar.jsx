import React from 'react';
import {
  Navbar, NavbarBrand, NavItem, Nav,
} from 'reactstrap';

import githubLogo from '../assets/github-icon.png';

const NavBar = () => (
  <Navbar light color="light" className="border-bottom">
    <NavbarBrand>Ballin Library</NavbarBrand>
    <Nav>
      <NavItem>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/JBallin/ballin-library">
          <img src={githubLogo} className="w-50" alt="GitHub Icon" />
        </a>
      </NavItem>
    </Nav>
  </Navbar>
);

export default NavBar;
