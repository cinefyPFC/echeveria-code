import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';
import './header.css';
// import { FiHome, FiUser, FiSettings } from 'react-icons/fi';

export default function HeaderAdmin() {
  return (
    <Col md={2} className="sidebar">
      <Link to="/dashboard">
        {/* <FiHome color="#FFF" size={24} /> */}
        Inicio
      </Link>
      <Link to="/dashboard/usuarios">
        {/* <FiUser color="#FFF" size={24} /> */}
        Usuário
      </Link>
      <Link to="#">
        {/* <FiSettings color="#FFF" size={24} /> */}
        Configurações
      </Link>
    </Col>
  );
}
