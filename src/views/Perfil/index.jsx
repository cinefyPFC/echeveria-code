import React, {useEffect, useState } from 'react';
import './style/perfil.css';
import api from '../../services/api';
import { Col, Row, Button } from 'reactstrap';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';

function Profile() {
  const [usuario, setUsuario] = useState([]);
  const [avatar, setAvatar] = useState([]);

  const handleUploadFile = (e) => setAvatar(e.target.files[0]);

  const uploadImage = async () => {

    const data = new FormData();
    data.append("avatar", avatar);
    // ...
    // chamada POST - para enviar arquivo
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
                      <img
                        src={avatar}
                        alt="Imagem usuario"
                        className="img-radius"
                      />
                      <h6 className="info-user-nome">Cinefy React</h6>
                      <p className="text-center personagem-favorito">{usuario.apelido}</p>
                        <div>
                          <input
                            type="file"
                            accept="image/*"
                            style={{ display: 'none' }}
                            id="contained-button-file"
                          />

                          <input accept="image/*" id="icon-button-file"
                            type="file" style={{ display: 'none' }} onChange={handleUploadFile} />
                          <label className="icon-upload-foto" htmlFor="icon-button-file" title="Alterar Imagem">
                            <IconButton color="primary" aria-label="upload picture"
                            component="span">
                              <PhotoCamera />
                            </IconButton>
                          </label>
                        </div>
                    </div>
                  </Col>

                  <Col sm={8} className="conteudo-usuario">
                    <div className="card-block">
                      <h6 className="info-user">Informações</h6>
                      <Row>
                        <Col sm={6}>
                          <p className="info-user">Apelido</p>
                          <h6 className="text-muted info-database">
                            {usuario.apelido}

                          </h6>
                        </Col>
                        <Col sm={6}>
                          <p className="info-user">Email</p>
                          <h6 className="text-muted info-database">
                            {usuario.email}
                          </h6>
                        </Col>
                        <Col sm={6}>
                          <p className="info-user">Data de Nascimento</p>
                          <h6 className="text-muted info-database">
                            {usuario.dtNascimento}
                          </h6>
                        </Col>
                        <Col sm={6}>
                          <p className="info-user">Senha</p>
                          <h6 className="text-muted info-database">
                            *************
                          </h6>
                        </Col>
                      </Row>
                      <h6 className="f-w-800">Trailers</h6>
                      <Row>
                        <Col sm={4}>
                          <p className="info-user">Filme Favorito</p>
                          <h6 className="text-muted info-database">
                            Star Wars
                          </h6>
                        </Col>
                        <Col sm={4}>
                          <p className="info-user">Série Favorita</p>
                          <h6 className="text-muted info-database">
                            Love Death and Robots
                          </h6>
                        </Col>
                        <Col sm={4}>
                          <p className="info-user">Documentário Favorito</p>
                          <h6 className="text-muted info-database">
                            A 13ª Emenda
                          </h6>
                        </Col>
                      </Row>
                      <Row className="buttonsPerfil">
                        <Col className="btnProfileAlt" md={12} sm={12}>
                          <Button outline color="warning">
                            Editar
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
