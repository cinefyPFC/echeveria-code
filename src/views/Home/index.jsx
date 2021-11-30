import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';
import ScrollArrow from '../../components/scroll';
import './style/home.css';

function Index() {
  return (
    <div>
      <Menu id="topo" />
      <Container fluid={true} >
        <header className="masthead">
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-12 text-center">
                <h1 className="fw-light">Cinefy</h1>
                <p className="lead">Sua rede social de cinema!</p>
              </div>
            </div>
          </div>
        </header>
      </Container>
      <Container>
        <Row>
          <Col>
            <div className="main-content top3-content">

            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid={true}>
        <section id="grid-one" className="grid-one main-bg section">
          <div className="main-content grid-one-content">
            <h2 className="grid-main-heading">Funcionalidades</h2>
            <p className="grid-description">Uma breve descrição.</p>
            <Container>
              <Row >
                <Col md="4" sm="12">
                  <article>
                    <h3>Descubra novos filmes!</h3>
                    <p>Nós temos acesso a maior base de dados sobre a sétima arte.</p>
                  </article>
                </Col>
                <Col md="4" sm="12">
                  <article>
                    <h3>Faça resenhas!</h3>
                    <p>Dê uma nota, e diga sua opinião! Ela importa muita para nós.</p>
                  </article>
                </Col>
                <Col md="4" sm="12">
                  <article>
                    <h3>Nunca mais fique sem o que ver!</h3>
                    <p>Com recomendações das obras mais relevantes do momento e muito mais.</p>
                  </article>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
      </Container>

      <Footer />
      <ScrollArrow />
    </div>
  );
}
export default Index;
