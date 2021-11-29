import axios from "axios";
import React, { useEffect, useState } from 'react';
import { FiUserX } from 'react-icons/fi';
import { Button, Modal, ModalBody, Table } from 'reactstrap';
import HeaderAdmin from '../../components/HeaderAdmin';
import api from '../../services/api';



function Gerenciarresenha() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [resenha, setResenhas] = useState([]);

  useEffect(() => {
    async function getResenha() {
      let token = sessionStorage.getItem('token');
      const response = await api.get("review", {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      console.log(response.data);
      setResenhas(response.data);
    }
    getResenha();
  }, []);

  return (
    <div className="AdminTela">
      <HeaderAdmin></HeaderAdmin>
      <div className="AdminConteudo">
        <Table dark striped responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Titulo</th>
              <th>Corpo</th>
              <th>Ações</th>
            </tr>
          </thead>
          {resenha.map((resenha) => (
          <tbody key={resenha.id}>
            <tr>
            <th scope="row" >{resenha.id}</th>
              <td className="table-gerenciamento-usuario">{resenha.titulo}</td>
              <td className="table-gerenciamento-usuario">{resenha.corpo}</td>
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
                        // data: { id: `${idResenha}` }
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
           ))}
        </Table>
      </div>
    </div>
  );
}
export default Gerenciarresenha;
