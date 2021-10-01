import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
} from 'reactstrap';
import './navbarUser.css';

const NavbarUser = () => {

  return (
    <div>
      <Navbar className="navbar-usuario">
        <ul>
          <li>
            <Link to="/feed"></Link>
          </li>
          <li>
            <Link to="/feed">Filme</Link>
          </li>
          <li>
            <Link to="/feed">Série</Link>
          </li>
          <li>
            <Link to="/feed">Documentário</Link>
          </li>
        </ul>
        <Link className="btnLogout" to="/logout"></Link>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            <img
              className="img-logout"
              src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
              alt="Imagem usuario"
            ></img>
          </DropdownToggle>
          <DropdownMenu right>
            <Link to="/perfil">Option 1</Link>
            <Link to="/perfil">Option 2</Link>
            <hr />
            <Link to="/perfil">Logout</Link>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Navbar>
    </div>
  );
};

export default NavbarUser;
