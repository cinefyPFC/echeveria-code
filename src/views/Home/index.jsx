import React from 'react';
import './style/home.css';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import { Container, Row, Col } from 'reactstrap';
import ScrollArrow from '../../components/scroll';

function Home() {
  return (
    <div>
      <Menu id="topo"/>
        <Container fluid={true} >
          <header className="masthead">
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-12 text-center">
                  <h1 className="fw-light">Vertically Centered Masthead Content</h1>
                  <p className="lead">A great starter layout for a landing page</p>
                </div>
              </div>
            </div>
          </header>
          </Container>
          <Container>
            <Row>
              <Col>
                <div className="main-content top3-content">
                  <h2>news coverage and some
                    surprises</h2>
                  <p>The release of Apple Silicon-based Macs at the end of last year generated a flurry of news coverage and some
                    surprises at the machine’s performance. This post details some background information on the experience of
                    porting Firefox to run natively on these CPUs.</p>
                  <p>We’ll start with some background on the Mac transition and give an overview of Firefox internals that needed to
                    know about the new architecture, before moving on to the concept of Universal Binaries.</p>
                  <p>We’ll then explain how DRM/EME works on the new platform, talk about our experience with macOS Big Sur, and
                    discuss various updater problems we had to deal with. We’ll conclude with the release and an overview of various
                    other improvements that are in the pipeline.</p>
                </div>
              </Col>
            </Row>
          </Container>
          <Container fluid={true}>
            <section id="grid-one" className="grid-one main-bg section">
              <div className="main-content grid-one-content">
                <h2 className="grid-main-heading">My Grid</h2>
                <p className="grid-description">Uma breve descrição.</p>
                <Container>
                  <Row >
                    <Col  md="4" sm="12">
                        <article>
                          <h3>Teste 1</h3>
                          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus
                            nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores
                            provident maiores.</p>
                        </article>
                      </Col>
                      <Col  md="4" sm="12">
                        <article>
                          <h3>Teste 2</h3>
                          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus
                            nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores
                            provident maiores.</p>
                        </article>
                      </Col>
                      <Col  md="4" sm="12">
                        <article>
                          <h3>Teste 3</h3>
                          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus
                            nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores
                            provident maiores.</p>
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
export default Home;
