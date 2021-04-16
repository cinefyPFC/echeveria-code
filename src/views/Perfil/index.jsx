import React from 'react';
import './style/perfil.css';
import { Link } from 'react-router-dom';
import { Col, Row, Button } from 'reactstrap';
import NavbarUser from '../../components/Sidenavbar/navbarUser';

function Profile() {
  return (
    <>
      <NavbarUser />

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
                        src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
                        alt="Imagem usuario"
                        className="img-radius"
                      />
                      <h6 className="info-user-nome">Cinefy React</h6>
                      <p className="text-center personagem-favorito">Yoda</p>
                    </div>
                  </Col>
                  <Col sm={8} className="conteudo-usuario">
                    <div className="card-block">
                      <h6 className="info-user">Informações</h6>
                      <Row>
                        <Col sm={6}>
                          <p className="info-user">Apelido</p>
                          <h6 className="text-muted info-database">
                            TheCinefy
                          </h6>
                        </Col>
                        <Col sm={6}>
                          <p className="info-user">Email</p>
                          <h6 className="text-muted info-database">
                            cinefy@cinefy.com
                          </h6>
                        </Col>
                        <Col sm={6}>
                          <p className="info-user">Data de Nascimento</p>
                          <h6 className="text-muted info-database">
                            14/04/2021
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
                          <Button outline color="danger">
                            Excluir
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
    </>
  );
}

export default Profile;
