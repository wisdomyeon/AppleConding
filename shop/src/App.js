import { useState } from 'react';
import './App.css';
import {Button, Navbar, Container, Nav} from 'react-bootstrap';
import data from './component/data.js';
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom"
import Detail from './page/Detail';

function App() {
  let [shoesdata, setShoesData] = useState(data)
  let navigate = useNavigate();

  return (
    <div className="App">
      
       <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Yeon's</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" onClick={()=>navigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate('/detail')}>Detail</Nav.Link>
            <Nav.Link onClick={() => navigate('/about')}>About</Nav.Link> 
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={ 
           <>
           <div className='main-bg'></div>
           <div className='container'>
             <div className='row'>
               {
                 shoesdata.map((shoes)=>{ 
                   return <ShoesData shoesdata = {shoes} key={shoes.id}></ShoesData>
                 })
               }
             </div>
           </div>
           </>
         } />
         
        <Route path='/detail/:id' element={<Detail shoes={ shoesdata } />}/>
        <Route path='/detail/:id' element={<Detail shoes={ shoesdata } />}/>
        <Route path='/detail/:id' element={<Detail shoes={ shoesdata } />} />
        
        <Route path='/about' element={<About/>}>
          <Route path='member' element={<div>멤버 정보</div>}/>
          <Route path='location' element={<div>장소 정보</div>}/>
        </Route>

        < Route path='/event' element={ <Event/>}>
          <Route path='one' element={<div> 첫 주문시 양배추즙 서비스 </div>} />
          <Route path='two' element={<div> 생일기념 쿠폰받기 </div>} />
        </Route>
      </Routes> 

      <Button variant="primary">Primary</Button>
      <Button variant="light" onClick={() => {
        let temp = [...shoesdata];
        temp.sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          }
          else if (a.title > b.title) {
            return 1;
          }
        });
        setShoesData(temp);
      }}>가나다순 정렬</Button>
    </div>
  );
}
export default App;

function ShoesData(props) {
  return(
    <div className='col-md-4'>
      <img src={process.env.PUBLIC_URL + `/shoes${props.shoesdata.id+1}.jpg`} width="80%"></img>
      <h4>{props.shoesdata.title}</h4>
      <p>{props.shoesdata.price}</p>
    </div>
  )
}

function About() {
  return (
    <div>
      <h4>회사정보</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Event() {
  return (
    <div>
      <h3>오늘의 이벤트</h3>
      <Outlet></Outlet>
    </div>
  )
}