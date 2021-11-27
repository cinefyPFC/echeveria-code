import React, { useState } from 'react';
import HeaderAdmin from '../../components/HeaderAdmin';
import { Table, Button, Modal, ModalBody } from 'reactstrap';
import './gerenciamento.css';
import { FiUserX } from 'react-icons/fi';

function Gerenciarusuario() {
  const [modal, setModal] = useState(false);
  // Toggle for Modal
  const toggle = () => setModal(!modal);
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
              <td className="table-gerenciamento-usuario">
                guilherme@alunos.umc.br
              </td>
              <td className="table-gerenciamento-usuario">
                <Button color="danger" onClick={toggle} title="Excluir Usuário">
                  <FiUserX size="25"></FiUserX>
                </Button>
                <Modal
                  isOpen={modal}
                  toggle={toggle}
                  modalTransition={{ timeout: 500 }}
                >
                  <ModalBody>Deseja excluir o usuário?</ModalBody>
                  <Button
                    onClick={function noRefCheck() {
                      console.log('excluido');
                    }}
                  >
                    Excluir
                  </Button>
                  <Button
                    color="primary"
                    onClick={function noRefCheck() {
                      console.log('cancelado');
                    }}
                  >
                    Cancelar
                  </Button>
                </Modal>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}
export default Gerenciarusuario;
