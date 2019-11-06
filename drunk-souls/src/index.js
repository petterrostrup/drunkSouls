import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container, Row, Col} from 'react-bootstrap';
import 'index.css';
import App from 'App';
import Rules from 'components/HelpPages/Rules/Rules';
import * as serviceWorker from 'serviceWorker';
import {
  Covenants, BladesOfTheDarkmoon, CompanyOfChampions,
  BrotherhoodOfBlood, PilgrimsOfDark, WarriorOfSunlight 
} from 'components/HelpPages/Covenants';


const routing = (
    <Router>
      <div className="Navbar">
        <Navbar expand="lg" variant="dark" fixed="top">
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
          <Col xs={12}>
            <div>
              <Route exact path="/" component={App} />
              <Route path="/rules" component={Rules} />
              <Route exact path="/covenants" component={Covenants} />
              <Route path="/covenants/blades-of-the-darkmoon" component={BladesOfTheDarkmoon}/>
              <Route path="/covenants/brotherhood-of-blood" component={BrotherhoodOfBlood}/>
              <Route path="/covenants/company-of-champions" component={CompanyOfChampions}/>
              <Route path="/covenants/pilgrims-of-dark" component={PilgrimsOfDark}/>
              <Route path="/covenants/warrior-of-sunlight" component={WarriorOfSunlight}/>
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
