import axios from "axios";
import React, { useEffect, useState } from 'react';
import { FiUserX } from 'react-icons/fi';
import { Button, Modal, ModalBody, Table } from 'reactstrap';
import HeaderAdmin from '../../components/HeaderAdmin';
import api from '../../services/api';



function Gerenciarresenha() {
  const [modal, setModal] = useState(false);

  // Toggle for Modal
  const toggle = () => setModal(!modal);
  useEffect(() => {
    async function getUsers() {
      let token = sessionStorage.getItem('token');
      await api
        .get('review', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        .then(function (response) {
          console.log('Boa!', response.data);
          // setUsuario(response.data);
          // setAvatar(response.data.avatar.url);
          // console.log('Usuario!', usuario);
        })
        .catch(function (error) {
          console.log('Opa aconteceu esse erro aqui!', error);
        });
    }
    getUsers();
  }, []);
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
              <td className="table-gerenciamento-usuario">
                guilherme@alunos.umc.brguilherme@alunos.umc.br
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
                <Button color="danger" onClick={toggle} title="Excluir Usuário">
                  <FiUserX size="25"></FiUserX>
                </Button>
                <Modal
                  isOpen={modal}
                  toggle={toggle}
                  modalTransition={{ timeout: 500 }}
                >
                  <ModalBody>Deseja excluir a resenha ?</ModalBody>
                  <Button
                    onClick={function noRefCheck() {
                      console.log('excluido');
                      let token = sessionStorage.getItem('token');
                      const options = {
                        method: 'DELETE',
                        url: 'http://localhost:3333/admin/delete/review',
                        headers: {
                          'Content-Type': 'application/json',
                          Authorization: `Bearer ${token}`,
                        },
                        data: { id: `${idResenha}` }
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
export default Gerenciarresenha;
