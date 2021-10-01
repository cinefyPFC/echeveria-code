import React from 'react';
import {Navbar, NavbarBrand, Nav, NavItem,NavLink, } from 'reactstrap';
import imgLogo from './img/CinefyLogo.png';
import './style/menu.css';
const Menu = () => {


  return (
    <div>
      <Navbar className="menu-index" expand="md">
        <NavbarBrand href="/"><img className="img-logo" src={imgLogo} /></NavbarBrand>
          <Nav className="ml-auto" navbar>

            <NavItem>
              <NavLink href="/Login">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Cadastro">Cadastro</NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
  );
}

export default Menu;
