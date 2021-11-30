import React from 'react';
import { FiEdit, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';
import './header.css';

export default function HeaderAdmin() {
  return (
    <Col md={2} className="sidebar">
      <Link to="/gerenciarusuarios">
        {<FiUser color="#FFF" size={24} />}
        Usuários
      </Link>
      <Link to="/gerenciarresenhas">
        {<FiEdit color="#FFF" size={24} />}
        Resenhas
      </Link>
    </Col>
  );
}
