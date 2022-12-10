import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Detail = (props) => {
  let { id } = useParams();
  let [event, setEvent] = useState(true);
  let [input, setInput] = useState('');


  useEffect(() => {
    setTimeout(() => {
      setEvent(false);
    }, 2000);
    return () => {
      console.log("디테일 컴포넌트 삭제");
    };
  });

  useEffect(() => {
    if (isNaN(input) === true) {
      setTimeout(() => {
        alert(`문자를 입력하셨어요.`);
      }, 3000);
    };
  }, [input]);

  return (
    <div className="container">
      {event ? (
        <div className="alert alert-warning"> 2초이내 구매시 할인</div>
      ) : null}
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
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
