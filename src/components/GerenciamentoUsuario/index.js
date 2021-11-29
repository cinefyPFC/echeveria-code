import axios from 'axios';
import React, { useState } from 'react';
import { FiUserX } from 'react-icons/fi';
import { Button, Modal, ModalBody, Table } from 'reactstrap';
import HeaderAdmin from '../../components/HeaderAdmin';
import './gerenciamento.css';

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
                      const options = {
                        method: 'DELETE',
                        url: 'http://localhost:3333/admin/delete/user',
                        headers: {
                          'Content-Type': 'application/json',
                          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjM4MTQ4NjU1LCJleHAiOjE2Mzg3NTM0NTV9.cawn4jh0b143SZmKrAX9bdTDju80SlvXi9G46KTktZ4'
                        },
                        data: { apelido: 'guilherme3' }
                      };

                      axios.request(options).then(function (response) {
                        console.log(response.data);
                      }).catch(function (error) {
                        console.error(error);
                      });
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
