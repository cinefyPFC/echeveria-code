import React from 'react';
import { useHistory } from 'react-router-dom';
import HeaderAdmin from '../../../components/HeaderAdmin';

function Dashboard() {
  let history = useHistory();
  if (sessionStorage.getItem('token') == null) {
    history.push('/');
    console.log("retorno");
    return (
      <div>Faça o login por favor</div>
    )
  } else {
    return (
      <div className="AdminTela">
        <HeaderAdmin></HeaderAdmin>

        <div className="AdminConteudo">
          <h1>Conteudo</h1>
        </div>
      </div>
    );
  }
}
export default Dashboard;
