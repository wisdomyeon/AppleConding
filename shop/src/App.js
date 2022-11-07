import './App.css';
import {Button, Navbar, Container, Nav} from 'react-bootstrap';

function App() {
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
      <div>git test commit</div>
      <div className='main-bg'></div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <img src={process.env.PUBLIC_URL + '/shoes1.jpg'} width="80%"></img>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className='col-md-4'>
            <img src={process.env.PUBLIC_URL +'/shoes2.jpg'} width="80%"></img>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className='col-md-4'>
            <img src={process.env.PUBLIC_URL +'/shoes3.jpg'} width="80%"></img>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
        </div>
      </div>
      <Button variant="primary">Primary</Button>
    </div>
  );
}

export default App;
