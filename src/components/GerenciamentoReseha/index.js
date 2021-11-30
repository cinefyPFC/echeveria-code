import axios from "axios";
import React, { useEffect, useState } from 'react';
import { FiUserX } from 'react-icons/fi';
import { Button, Table } from 'reactstrap';
import HeaderAdmin from '../../components/HeaderAdmin';
import api from '../../services/api';



function Gerenciarresenha() {


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
                  <Button color="danger" title="Excluir Usuário"
                    onClick={function deletarResenha() {
                      console.log('excluido');
                      let token = sessionStorage.getItem('token');
                      const options = {
                        method: 'DELETE',
                        url: 'http://localhost:3333/admin/delete/review',
                        headers: {
                          'Content-Type': 'application/json',
                          Authorization: `Bearer ${token}`,
                        },
                        data: { id: `${resenha.id}` }
                      };

                      axios.request(options).then(function (response) {
                        console.log(response.data);
                        window.location.reload(false)
                      }).catch(function (error) {
                        console.error(error);
                      });
                    }}
                  >
                    <FiUserX size="25"></FiUserX>
                  </Button>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </div >
  );
}
export default Gerenciarresenha;
