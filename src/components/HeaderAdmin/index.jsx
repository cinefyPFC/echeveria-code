import React from 'react';
import './header.css';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FiHome, FiUser, FiSettings } from 'react-icons/fi';

export default function HeaderAdmin() {
  return (
    <Col md={2} className="sidebar">
      <Link to="/dashboard">
        <FiHome color="#FFF" size={24} />
        Inicio
      </Link>
      <Link to="/customers">
        <FiUser color="#FFF" size={24} />
        Usuário
      </Link>
      <Link to="/profile">
        <FiSettings color="#FFF" size={24} />
        Configurações
      </Link>
    </Col>
  );
}
