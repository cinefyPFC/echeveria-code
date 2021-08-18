import React from 'react';
import HeaderAdmin from '../../../components/HeaderAdmin';
import { Col } from 'reactstrap';

function Dashboard() {
  return (
    <div className="AdminTela">
      <HeaderAdmin></HeaderAdmin>

      <div className="AdminConteudo">
        <h1>Conteudo</h1>
      </div>
    </div>
  );
}
export default Dashboard;
