import React from 'react';
import HeaderAdmin from '../../components/HeaderAdmin';
import { Table } from 'reactstrap';
import './gerenciamento.css';
import { FiUserX, FiEdit} from "react-icons/fi";

function gerenciarUsuario() {
  return (

    <div className="AdminTela">
      <HeaderAdmin></HeaderAdmin>
      <div className="AdminConteudo">

        <Table dark striped responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td className="table-gerenciamento-usuario">Guilherme</td>
              <td className="table-gerenciamento-usuario">guilherme@alunos.umc.br</td>
              <td className="table-gerenciamento-usuario">
                <FiEdit size='25'></FiEdit>
               <FiUserX size='25'></FiUserX>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>

  );
}
export default gerenciarUsuario;
