import logo from './logo.svg';
import './App.css';
import { useState, useSyncExternalStore } from "react";

function App() {
  let test ="깃 테스트";
  let post = "재림이 바보";
  let d = 'pull X';
  /*useState 선언*/
  let [title, titleChange] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]);
  let [good, goodUp] = useState(0);
  let [title2, setTitle] = useState(0)
  
  let [modal, setModal] = useState(false);
  let [Input,setInput] = useState('')

  return (
    <div className="App">
      <div className="black-nav">
        <h4> 최연지 </h4>
      </div>
      <button
        onClick={() => {
          let copy = [...title];
          copy[0] = "여자 코트 추천";
          titleChange(copy);
        }}
      >
        (●'◡'●)
      </button>
      <button
        onClick={() => {
          let copy2 = [...title];
          copy2.sort();
          titleChange(copy2);
        }}
      >
        가나다순 정렬
      </button>

      {
        title.map(function (a, i) {
          return (
            <div className="list">
            <h4
              onClick={() => {
                  setModal(true);
                  setTitle(i);
              }}
              >{ title[i] }
            </h4>
            <span onClick={(e) => {
                e.stopPropagation();
                goodUp(good+1) 
             }}>👍</span> { good }
            <p>9월 30일 발행</p>
            <input type="submit" value="삭제" onClick={ ()=>{
              let copy = [...title]
              copy.splice(i,1);
              titleChange(copy);
            }}/>
          </div>
          )
        })  
      }
      dddd
      <input onChange={(e)=>{
            setInput(e.target.value)
            console.log(Input)
      }}/>
      
      <input type="submit" value="글 발행" onClick={ (e) => {
        let copy = [ Input, ...title]
        titleChange(copy);
      }}/>

      <h4 style={{ color: "pink", fontSize: "20px" }}>{post}</h4>
      {modal == true ? <Modal color="pink" title={title} title2={ title2 } change={()=>{
        let copy =[...title];
        copy[0] = "여자 코트 추천";
        titleChange(copy);
      }}></Modal> : null}
      <Student_list></Student_list>
    </div>
  );
}

/* function 기능 모음*/
/* function NewList(props){
    <div className="newlist" css 따로하기>
      <h4>{}</h4>
      <input type="submit" value="글 발행" onClick={(e)=>{
        props.add();
      }}/>
    </div>

*/ 
function Modal(props) {
  return (
    <div className="modal" style={{backgroundColor: props.color}}>
      <h4>{props.title[props.title2]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => {
        props.change();
      }}>글수정</button>
    </div>
  );
}

function Student_list() {
  return (
    <div className="StudentList">
      <h4>컴퓨터공학과 학생 list</h4>
      <p>20201387 최연지</p>
      <p>20180869 전종훈</p>
    </div>
  );
}
export default App;
