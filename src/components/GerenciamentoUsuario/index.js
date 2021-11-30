import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FiUserX } from 'react-icons/fi';
import { Button, Table } from 'reactstrap';
import HeaderAdmin from '../../components/HeaderAdmin';
import api from '../../services/api';
import './gerenciamento.css';

function Gerenciarusuario() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [usuarios, setUsuario] = useState([]);


  useEffect(() => {
    async function getUsers() {
      let token = sessionStorage.getItem('token');
      const response = await api.get("users", {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      console.log(response.data);
      setUsuario(response.data);
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
              <th>Nome</th>
              <th>Email</th>
              <th>Ações</th>
            </tr>
          </thead>
          {usuarios.map((usuario) => (
            <tbody key={usuario.id}>
              <tr>
                <th scope="row" >{usuario.id}</th>
                <td className="table-gerenciamento-usuario" id={usuario.apelido}>{usuario.apelido}</td>
                <td className="table-gerenciamento-usuario">{usuario.email}</td>

                <td className="table-gerenciamento-usuario">
                  <Button color="danger" onClick={function excluirUsuario() {
                    console.log(usuario.apelido)
                    let token = sessionStorage.getItem('token');
                    const options = {

                      method: 'DELETE',
                      url: 'http://localhost:3333/admin/delete/user',
                      headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                      },
                      data: {
                        apelido: `${usuario.apelido}`
                      }
                    };

                    axios.request(options).then(function (response) {
                      console.log(response.data);
                      window.location.reload(false)
                    }).catch(function (error) {
                      console.error(error);
                    });
                  }} title="Excluir Usuário">
                    <FiUserX size="25"></FiUserX>
                  </Button>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>

      </div>
    </div>
  );
}
export default Gerenciarusuario;
