import { useState } from "react";
import "./App.css";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import data from "./component/data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./page/Detail.jsx";
import styled from "styled-components";
import axios from 'axios';
import Cart from './component/Cart.js';

let Btn = styled.button`
  color: pink;
  background: white;
  border: 1px solid black;
`;

function App() {
  let [shoesdata, setShoesData] = useState(data);
  let [count, setCount] = useState(0);
  let [itemEmpty, setItemEmpty] = useState("");
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Yeon's</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" onClick={() => navigate("/")}>
              Home
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/detail")}>Detail</Nav.Link>
            <Nav.Link onClick={() => navigate("/about")}>About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <div className="container">
                <div className="row">
                  {shoesdata.map((shoes) => {
                    return (
                      <ShoesData shoesdata={shoes} key={shoes.id}></ShoesData>
                    );
                  })}
                </div>
                <Button variant="primary">Primary</Button>
                <Button
                  variant="light"
                  onClick={() => {
                    let temp = [...shoesdata];
                    temp.sort((a, b) => {
                      if (a.title < b.title) {
                        return -1;
                      } else if (a.title > b.title) {
                        return 1;
                      }
                    });
                    setShoesData(temp);
                  }}
                >
                  가나다순 정렬
                </Button>
                <Btn onClick={() => {
                  axios.all([
                    axios.get('https://codingapple1.github.io/shop/data2.json'),
                    axios.get('https://codingapple1.github.io/shop/data3.json')
                  ])
                    .then((result) => {
                      for (let i in result) {
                        console.log(result[i].data)
                        let copy = [...data, ...result[i].data]
                        setShoesData(copy);
                        setCount(count + 1);
                      }
                    })
                    .catch(() => {
                      console.log('실패함')
                    })
                  // axios.get('https://codingapple1.github.io/shop/data3.json')
                  //   .then((result2) => {
                  //     let copy = [...data, ...result2.data]
                  //     setShoesData(copy)
                  //   })
                  if (count >= 3) {
                    setItemEmpty("상품이 없습니다.");
                    alert(itemEmpty);
                  }
                }}>더보기{count}</Btn>
              </div>
            </>
          }
        />

        <Route path="/detail/:id" element={<Detail shoesdata={shoesdata} />} />
        <Route path="*" element={<div>404 페이지</div>} />
        <Route path="/cart" element={<Cart />}></Route>

        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버 정보</div>} />
          <Route path="location" element={<div>장소 정보</div>} />
        </Route>

        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div> 첫 주문시 양배추즙 서비스 </div>} />
          <Route path="two" element={<div> 생일기념 쿠폰받기 </div>} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;

function ShoesData(props) {
  return (
    <div className="col-md-4">
      <img
        src={process.env.PUBLIC_URL + `/shoes${props.shoesdata.id + 1}.jpg`}
        width="80%"
      ></img>
      <h4>{props.shoesdata.title}</h4>
      <p>{props.shoesdata.price}</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사정보</h4>
      <Outlet></Outlet>
    </div>
  );
}

function Event() {
  return (
    <div>
      <h3>오늘의 이벤트</h3>
      <Outlet></Outlet>
    </div>
  );
}
