/* eslint-disable */

import { useState } from 'react';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState([
    '8월 여행지 추천',
    '부산 전포카페거리 맛집 추천',
    '나도 네카라쿠배 갈 수 있다? 프론트엔드 개발자 과정',
  ]);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>

      <button
        onClick={() => {
          let array = [...글제목];
          글제목변경(array.sort());
        }}
      >
        가나다순 정렬
      </button>

      <button
        onClick={() => {
          let copy = [...글제목];
          copy[0] = '여자코트 추천';
          글제목변경(copy);
        }}
      >
        글수정
      </button>

      {/* <div className='list'>
        <h4>
          {글제목[0]}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍🏼
          </span>{' '}
          {따봉}{' '}
        </h4>
        <p>6월 06일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>7월 02일 발행</p>
      </div>
      <div className='list'>
        <h4
          onClick={() => {
            setModal(!modal);
          }}
        >
          {글제목[2]}
        </h4>
        <p>7월 03일 발행</p>
      </div> */}

      {글제목.map(function (a, i) {
        return (
          <div className='list' key={i}>
            <h4
              onClick={() => {
                setModal(true);
                setTitle(i);
              }}
            >
              {글제목[i]}{' '}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...따봉];
                  copy[i] += 1;
                  따봉변경(copy);
                }}
              >
                👍🏼
              </span>{' '}
              {따봉[i]}
            </h4>
            <p>7월 02일 발행</p>
            <button
              onClick={() => {
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}

      <input
        onChange={(e) => {
          입력값변경(e.target.value);
          // console.log(입력값);
        }}
      ></input>
      <button
        onClick={() => {
          let copy = [...글제목];
          copy.unshift(입력값);
          글제목변경(copy);
        }}
      >
        등록
      </button>

      {modal == true ? (
        <Modal title={title} 글제목변경={글제목변경} 글제목={글제목} />
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal' style={{ background: props.color }}>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          let copy = [...props.글제목];
          copy[0] = '여자코트 추천';
          props.글제목변경(copy);
        }}
      >
        글수정
      </button>
    </div>
  );
}

export default App;
