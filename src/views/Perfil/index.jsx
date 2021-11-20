import React, { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.min.css';
import { Button, Col, Row } from 'reactstrap';
import HeaderPerfil from '../../components/HeaderPerfil';
import UploadImage from '../../components/UploadImage';
import api from '../../services/api';
import './style/perfil.css';
import onClickCancelar from './javascript/cancelar';
import onClickEditar from './javascript/editar';

function Profile() {
  const [usuario, setUsuario] = useState([]);
  const [avatar, setAvatar] = useState([]);

  const data = new FormData();

  const handleUploadFile = (e) => setAvatar(e.target.files[0]);

  const uploadImage = async () => {
    data.append('arquivo', '/home/guilherme/Pictures/pika.jpeg');
    let token = sessionStorage.getItem('token');
    await api;
    await fetch('http://localhost:3333/files', {
      method: 'POST',
      headers: {
        'Content-Type': `multipart/form-data; boundary=${avatar}`,
        Authorization: `Bearer ${token}`,
      },
      body: data,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const prepareImage = (e) => {
    handleUploadFile(e);
    uploadImage();
  };

  useEffect(() => {
    async function getUsers() {
      let token = sessionStorage.getItem('token');
      await api
        .get('users/show', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        .then(function (response) {
          console.log('Boa!', response.data);
          setUsuario(response.data);
          setAvatar(response.data.avatar.url);
          console.log('Usuario!', usuario);
        })
        .catch(function (error) {
          console.log('Opa aconteceu esse erro aqui!', error);
        });
    }
    getUsers();
  }, []);

  return (
    <div>
      <HeaderPerfil />
      <div
        className="page-content page-profile-user page-container"
        id="page-content"
      >
        <div className="padding">
          <Row>
            <Col xl={12} md={12}>
              <div className="card user-card-full">
                <Row className="rowInfoUsario">
                  <Col sm={4} className="bg-uf user-profile">
                    <div className="card-block text-center text-white">
                      <UploadImage />
                      <p className="info-user-nome">Cinefy React</p>
                      <p className="text-center personagem-favorito">
                        {usuario.apelido}
                      </p>
                    </div>
                  </Col>

                  <Col sm={8} className="conteudo-usuario">
                    <div className="card-block">
                      <p className="info-user">Informações</p>
                      <Row>
                        <Col sm={6}>
                          <p className="info-user">Apelido</p>
                          <div className="hiddeninfo" id="hiddeninfoapelido">
                            <p className="text-muted info-database">
                              {usuario.apelido}aaaaa
                            </p>
                          </div>
                          <div id="initialinputapelido" className="inputhidden">
                            <input
                              type="text"
                              name="apelido"
                              pattern="[^\0]"
                              required=""
                            />
                          </div>
                        </Col>
                        <Col sm={6}>
                          <p className="info-user">Email</p>
                          <div className="hiddeninfo" id="hiddeninfoemail">
                            <p className="text-muted info-database">
                              {usuario.email}aaaaa
                            </p>
                          </div>
                          <div id="initialinputemail" className="inputhidden">
                            <input></input>
                          </div>
                        </Col>
                        <Col sm={6}>
                          <p className="info-user">Data de Nascimento</p>
                          <div
                            className="hiddeninfo"
                            id="hiddeninfodtnascimento"
                          >
                            <p className="text-muted info-database">
                              {usuario.dtNascimento}aaaaa
                            </p>
                          </div>
                          <div id="initialinputdtnascimento" className="inputhidden">
                            <input
                              type="Date"
                              name=""
                              placeholder="Data Nascimento"
                              date-format="MM DD YYYY"
                              max="2019-12-31"
                              maxLength="8"
                              required="Digite sua data de nascimento"
                            />
                          </div>
                        </Col>
                        <Col sm={6}>
                          <p className="info-user">Senha</p>
                          <div className="hiddeninfo" id="hiddeninfosenha">
                            <p className="text-muted info-database">
                              *************
                            </p>
                          </div>
                          <div id="initialinputsenha" className="inputhidden">
                            <input></input>
                          </div>
                        </Col>
                      </Row>
                      <p className="f-w-800">Trailers</p>
                      <Row>
                        <Col sm={4}>
                          <p className="info-user">Filme Favorito</p>
                          <div className="hiddeninfo" id="hiddeninfofilme">
                            <p className="text-muted info-database">
                              Star Wars
                            </p>
                          </div>
                          <div id="initialinputfilme" className="inputhidden">
                          <input></input>
                          </div>
                        </Col>
                        <Col sm={4}>
                          <p className="info-user">Série Favorita</p>
                          <div className="hiddeninfo" id="hiddeninfoserie">
                            <p className="text-muted info-database">
                              Love Death and Robots
                            </p>
                          </div>
                          <div id="initialinputserie" className="inputhidden">
                          <input></input>
                          </div>
                        </Col>
                        <Col sm={4}>
                          <p className="info-user">Documentário Favorito</p>
                          <div className="hiddeninfo" id="hiddeninfodocumentario">
                            <p className="text-muted info-database">
                              A 13ª Emenda
                            </p>
                          </div>
                          <div id="initialinputdocumentario" className="inputhidden">
                          <input></input>
                          </div>
                        </Col>
                      </Row>
                      <Row className="buttonsPerfil">
                        <Col className="btnProfileAlt" md={12} sm={12}>
                          <Button
                            outline
                            color="warning"
                            id="Editar"
                            name="Editar"
                            value="Editar"
                            onClick={onClickEditar}
                          >
                            Editar
                          </Button>
                          <Button
                            outline
                            color="danger"
                            className="btnDanger"
                            id="Cancelar"
                            name="Editar"
                            value="Editar"
                            onClick={onClickCancelar}
                          >
                            Cancelar
                          </Button>
                          <Button outline color="success">
                            Salvar
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Profile;
