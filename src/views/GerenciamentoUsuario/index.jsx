import React from 'react';
import HeaderAdmin from '../../components/HeaderAdmin';
import { Table } from 'reactstrap';
import './style/gerenciamento.css';

function Usuario() {
  return (
    <div className="AdminTela">
      <HeaderAdmin></HeaderAdmin>
      <div className="AdminConteudo">
        <Table dark>
          <thead>
            <tr>
              <th>#</th>
              <th>Apelido</th>
              <th>Email</th>
              <th>Username</th>
              <th>Personagem Favorito</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td className="table-gerenciamento-usuario">Prettier lixo</td>
              <td className="table-gerenciamento-usuario">Prettier lixo</td>
              <td className="table-gerenciamento-usuario">Prettier lixo</td>
              <td className="table-gerenciamento-usuario">Prettier lixo</td>
              <td className="table-gerenciamento-usuario">Prettier lixo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td className="table-gerenciamento-usuario">Prettier lixo</td>
              <td className="table-gerenciamento-usuario">Prettier lixo</td>
              <td className="table-gerenciamento-usuario">Prettier lixo</td>
              <td className="table-gerenciamento-usuario">Prettier lixo</td>
              <td className="table-gerenciamento-usuario">Prettier lixo</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td className="table-gerenciamento-usuario">Prettier lixo</td>
              <td className="table-gerenciamento-usuario">Prettier lixo</td>
              <td className="table-gerenciamento-usuario">Prettier lixo</td>
              <td className="table-gerenciamento-usuario">Prettier lixo</td>
              <td className="table-gerenciamento-usuario">Prettier lixo</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}
export default Usuario;
