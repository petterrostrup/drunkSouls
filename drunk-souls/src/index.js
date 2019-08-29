import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container, Row, Col} from 'react-bootstrap';
import './index.css';
import App from './App';
import Home from './home/home';
import Rules from './rules/rules';
import Covenants from './covenants/covenants';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
      <div class="Stuff">
      <Navbar expand="lg" variant="dark" bg="dark">
        <Navbar.Brand href="/">Drunk Souls</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/rules">Rules</Nav.Link>
            <Nav.Link href="/covenants">Covenants</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
      <Container>
          <Row>
              <Col></Col>
              <Col xs={10}>
                <div class="main-content">
                    <Route exact path="/" component={App} />
                    <Route path="/rules" component={Rules} />
                    <Route path="/covenants" component={Covenants} />
                </div>
              </Col>
              <Col></Col>
          </Row>
      </Container>
        
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
