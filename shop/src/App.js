import { useState } from 'react';
import './App.css';
import {Button, Navbar, Container, Nav} from 'react-bootstrap';
import data from './data.js';

function App() {
  let [shoesData] = useState(data)
  return (
    <div className="App">
       <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Yeon's</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main-bg'></div>
      <div className='container'>
        <div className='row'>
          <ShoesData shoes={shoesData}/>
          <ShoesData/>
          <ShoesData/>
        </div>
      </div>
      <Button variant="primary">Primary</Button>

      
    </div>
  );
}
export default App;

function ShoesData(props) {
  return(
    <div className='col-md-4'>
      <img src={process.env.PUBLIC_URL + '/shoes1.jpg'} width="80%"></img>
      <h4>{props.shoes[0]}</h4>
      <p>상품설명</p>
    </div>
  )
}