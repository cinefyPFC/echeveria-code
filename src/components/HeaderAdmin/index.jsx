import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';
import './header.css';
import { FiHome, FiUser, FiEdit } from 'react-icons/fi';

export default function HeaderAdmin() {
  return (
    <Col md={2} className="sidebar">
      <Link to="/dashboard">
        {<FiHome color="#FFF" size={24} /> }
        Inicio
      </Link>
      <Link to="/gerenciarusuarios">
        { <FiUser color="#FFF" size={24} /> }
        Usuário
      </Link>
      <Link to="/gerenciarresenhas">
        { <FiEdit color="#FFF" size={24} /> }
        Configurações
      </Link>
    </Col>
  );
}
