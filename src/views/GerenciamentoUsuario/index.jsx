import React from 'react';
import HeaderAdmin from '../../components/HeaderAdmin';
import { Button, Table } from 'reactstrap';
import './style/gerenciamento.css';
import { FcEmptyTrash,FcAbout } from "react-icons/fc";
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';


function Usuario() {
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
              <UncontrolledButtonDropdown>
                <DropdownToggle caret>
                   ...
                </DropdownToggle>
              <DropdownMenu>
                <DropdownItem> <FcEmptyTrash></FcEmptyTrash>  Excluir</DropdownItem>
                <DropdownItem divider />
                <DropdownItem><FcAbout></FcAbout> Editar</DropdownItem>
                </DropdownMenu>
            </UncontrolledButtonDropdown>
                </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td className="table-gerenciamento-usuario">Kelvin</td>
              <td className="table-gerenciamento-usuario">kelv@umc.br</td>
              <td className="table-gerenciamento-usuario">

              <UncontrolledButtonDropdown>
                <DropdownToggle caret>
                   ...
                </DropdownToggle>
              <DropdownMenu>
                <DropdownItem> <FcEmptyTrash></FcEmptyTrash>  Excluir</DropdownItem>
                <DropdownItem divider />
                <DropdownItem><FcAbout></FcAbout> Editar</DropdownItem>
                </DropdownMenu>
            </UncontrolledButtonDropdown>
                </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td className="table-gerenciamento-usuario">Micael</td>
              <td className="table-gerenciamento-usuario">micael@umc.br</td>
              <td className="table-gerenciamento-usuario">

              <UncontrolledButtonDropdown>
                <DropdownToggle caret>
                   ...
                </DropdownToggle>
              <DropdownMenu>
                <DropdownItem> <FcEmptyTrash></FcEmptyTrash>  Excluir</DropdownItem>
                <DropdownItem divider />
                <DropdownItem><FcAbout></FcAbout> Editar</DropdownItem>
                </DropdownMenu>
            </UncontrolledButtonDropdown>

              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>

  );
}
export default Usuario;
