import React from 'react';
import HeaderAdmin from '../../components/HeaderAdmin';
import { Table } from 'reactstrap';
import { FiUserX, FiEdit} from "react-icons/fi";

function Resenha() {
  return (
    <div className="AdminTela">
      <HeaderAdmin></HeaderAdmin>
      <div className="AdminConteudo">

        <Table dark striped responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Apelido</th>
              <th>Resenha</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td className="table-gerenciamento-usuario">Guilherme</td>
              <td className="table-gerenciamento-usuario">guilherme@alunos.umc.brguilherme@alunos.umc.br
              guilherme@alunos.umc.brguilherme@alunos.umc.brguilherme@alunos.umc.brguilherme@alunos.umc.br
              guilherme@alunos.umc.brguilherme@alunos.umc.brguilherme@alunos.umc.brguilherme@alunos.umc.br
              guilherme@alunos.umc.brguilherme@alunos.umc.brguilherme@alunos.umc.brguilherme@alunos.umc.br
              guilherme@alunos.umc.brguilherme@alunos.umc.brguilherme@alunos.umc.brguilherme@alunos.umc.br
              guilherme@alunos.umc.brguilherme@alunos.umc.brguilherme@alunos.umc.brguilherme@alunos.umc.br
              guilherme@alunos.umc.brguilherme@alunos.umc.brguilherme@alunos.umc.brguilherme@alunos.umc.br
              guilherme@alunos.umc.brguilherme@alunos.umc.brguilherme@alunos.umc.brguilherme@alunos.umc.br
              guilherme@alunos.umc.brguilherme@alunos.umc.brguilherme@alunos.umc.brguilherme@alunos.umc.br
              guilherme@alunos.umc.brguilherme@alunos.umc.brguilherme@alunos.umc.brguilherme@alunos.umc.br
              guilherme@alunos.umc.brguilherme@alunos.umc.brguilherme@alunos.umc.brguilherme@alunos.umc.br
              guilherme@alunos.umc.brguilherme@alunos.umc.brguilherme@alunos.umc.brguilherme@alunos.umc.br
              </td>
              <td className="table-gerenciamento-usuario">
              <FiEdit size='25'></FiEdit> <FiUserX size='25'></FiUserX>
                </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>

  );
}
export default Resenha;
