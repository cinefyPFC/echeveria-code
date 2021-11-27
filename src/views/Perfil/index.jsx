import React, { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.min.css';
import { Button, Col, Row } from 'reactstrap';
import HeaderPerfil from '../../components/HeaderPerfil';
import UploadImage from '../../components/UploadImage';
import api from '../../services/api';
import onClickCancelar from './javascript/cancelar';
import onClickEditar from './javascript/editar';
import './style/perfil.css';
import { useHistory } from 'react-router-dom';

function Profile() {
  const [usuario, setUsuario] = useState([]);
  const [avatar, setAvatar] = useState([]);
  const [apelido, setApelido] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [dtNascimento, setDtnascimento] = useState('');
  const [genero, setGenero] = useState('');
  let history = useHistory();

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

  function onClickExcluir() {
    console.log('Usuário excluido');
  }
  function onClickSalvar() {
    console.log('Alteração feita com sucesso');

  }

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
  if (sessionStorage.getItem('token') == null) {
    history.push('/');
    console.log("retorno");
    return(
      <div>não possui permissão</div>
    )
  } else {
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
                        <p className="text-center personagem-favorito">
                          {usuario.apelido}
                        </p>
                        <UploadImage />
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
                                {usuario.apelido}
                              </p>
                            </div>
                            <div
                              id="initialinputapelido"
                              className="inputhidden"
                            >
                              <input
                                className="editInputStyle"
                                type="text"
                                name="apelido"
                                pattern="[^\0]"
                                required=""
                                value={apelido}
                                onChange={(e) => setApelido(e.target.value)}
                              />
                            </div>
                          </Col>
                          <Col sm={6}>
                            <p className="info-user">Email</p>
                            <div className="hiddeninfo" id="hiddeninfoemail">
                              <p className="text-muted info-database">
                                {usuario.email}
                              </p>
                            </div>
                            <div id="initialinputemail" className="inputhidden">
                              <input
                                className="editInputStyle"
                                type="text"
                                pattern="/^[^\s@]+@[^\s@]+$/"
                                name=""
                                required=""
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </div>
                          </Col>
                          <Col sm={6}>
                            <p className="info-user">Data de Nascimento</p>
                            <div
                              className="hiddeninfo"
                              id="hiddeninfodtnascimento"
                            >
                              <p className="text-muted info-database">
                                {usuario.dtNascimento}
                              </p>
                            </div>
                            <div
                              id="initialinputdtnascimento"
                              className="inputhidden"
                            >
                              <input
                                className="editInputStyle"
                                type="Date"
                                name=""
                                placeholder="Data Nascimento"
                                date-format="MM DD YYYY"
                                max="2019-12-31"
                                maxLength="8"
                                required="Digite sua data de nascimento"
                                value={dtNascimento}
                                onChange={(e) =>
                                  setDtnascimento(e.target.value)
                                }
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
                              <input
                                className="editInputStyle"
                                type="password"
                                pattern="[^\0]"
                                name="password"
                                required="Digite a senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                              />
                            </div>
                          </Col>
                          <Col sm={6}>
                            <p className="info-user">Gênero</p>
                            <div className="hiddeninfo" id="hiddeninfogenero">
                              <p className="text-muted info-database">
                                {usuario.genero}
                              </p>
                            </div>
                            <div
                              id="initialinputgenero"
                              className="inputhidden"
                            >
                              <input
                                className="editInputStyle"
                                type="text"
                                pattern="[^\0]"
                                name="genero"
                                value={genero}
                                onChange={(e) => setGenero(e.target.value)}
                              />
                            </div>
                          </Col>
                        </Row>

                        <Row className="buttonsPerfil">
                          <Col className="btnProfileAlt" md={12} sm={12}>
                            <div className="alinhamentoBotao">
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

                              <Button
                                outline
                                color="success"
                                id="Salvar"
                                name="Editar"
                                value="Editar"
                                onClick={onClickSalvar}
                              >
                                Salvar
                              </Button>

                              <Button
                                outline
                                color="danger"
                                id="Excluir"
                                name="Editar"
                                value="Editar"
                                onClick={onClickExcluir}
                              >
                                Excluir
                              </Button>
                            </div>
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
}

export default Profile;
