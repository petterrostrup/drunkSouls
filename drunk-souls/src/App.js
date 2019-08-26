import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Navbar expand="lg" variant="dark" bg="dark" fixed="top">
        <Navbar.Brand href="#home">Drunk Souls</Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default App;
