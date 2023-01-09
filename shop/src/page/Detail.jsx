import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import { useDispatch } from "react-redux";
import { addItem } from "./../store";
import { Routes, Route } from "react-router-dom";

const Detail = (props) => {
  let { id } = useParams();
  let [event, setEvent] = useState(true);
  let [input, setInput] = useState('');
  let [content, setContent] = useState(0);
  let [deatilPage, setDetailPage] = useState('');
  let dispatch = useDispatch();

  //할인문구 이벤트 effect
  useEffect(() => {
    setTimeout(() => {
      setEvent(false);
    }, 2000);
    return () => {
      console.log("디테일 컴포넌트 삭제");
    };
  });
  //수량 입력 input
  useEffect(() => {
    if (isNaN(input) === true) {
      setTimeout(() => {
        alert(`문자를 입력하셨어요.`);
      }, 3000);
    };
  }, [input]);
  //detail 페이지 전환애니메이션
  useEffect(() => {
    setTimeout(() => {
      setDetailPage('detailEnd')
    })
    return () => {
      setDetailPage('');
    }
  }, [id])

  return (
    <Routes>
      <div className={`container detailStart ${deatilPage}`}>
        {
          event ? (
            <div className="alert alert-warning" > 2초이내 구매시 할인</div>
          ) : null
        }
        <div className="row">
          <div className="col-md-6">
            <img
              src={
                process.env.PUBLIC_URL + `/shoes${props.shoesdata[id].id + 1}.jpg`
              }
              width="100%"
            />
          </div>
          <div className="col-md-6">

            <input onChange={(e) => {
              setInput(e.target.value);
            }} />
            <button onClick={() => { }}>전송</button>

            <h4 className="pt-5">{props.shoesdata[id].title}</h4>
            <p>{props.shoesdata[id].content}</p>
            <p>{props.shoesdata[id].price}</p>
            <Route path="/cart" component={
              <button className="btn btn-danger" onClick={() => {
                dispatch(addItem({ id: props.shoesdata.id, name: props.shoesdata[id].title, count: 1 }))
              }}>주문하기</button>
            } />

          </div>
        </div>
        <Nav variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link eventKey="link-1" onClick={() => {
              setContent(0)
            }
            }>상세정보</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" onClick={() => {
              setContent(1)
            }}>후기</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3" onClick={() => {
              setContent(2)
            }}>
              Q&A
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <TabContent content={content}></TabContent>
      </div >
    </Routes>
  );
};

//상세내용 전환애니메이션
function TabContent({ content }) {
  let [fade, setFade] = useState('');

  //end css를 뗐다가 다시 붙히는 작업
  useEffect(() => {
    setTimeout(() => { setFade('end') }, 100)
    return () => {
      setFade('')
    }
  }, [content])

  return (<div className={'start ' + fade}>
    {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][content]}
  </div>)
}

export default Detail;
