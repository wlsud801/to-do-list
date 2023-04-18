import React from 'react';
import { useState } from 'react';
import Working from './component/WorkList';
import './App.css';

const App = () => {
  const [work, setWork] = useState([
    { id: 1, title: '리액트 공부하기', contents: '리액트를 열심히 공부해봅시다!', isDone: false },
    { id: 2, title: '리액트 공부하기', contents: '리액트를 열심히 공부해봅시다!', isDone: false },
    { id: 3, title: '자바스크립트 공부하기', contents: '자바스크립트를 열심히 공부해보자', isDone: true }
  ])
  
  // 입력 받은 값을 저장해두는 State
  const [listInfo, setListInfo] = useState({ title: '', contents: '' });

  // 입력받은 값을 listInfo state에 저장 해주기
  const addInputHandler = (e) => {
    setListInfo({ ...listInfo, [e.target.name]: e.target.value })
  }

  // listInfo에 저장된 값을 work State에 업데이트해주기
  const registerBtn = () => {
    const list = {
      id: (work[work.length - 1].id) + 1,
      title: listInfo.title,
      contents: listInfo.contents,
      isDone: false
    }

    setWork([...work, list])
    setListInfo({ title: '', contents: '' })
  }

  // 완료 OR 완료취소 버튼
  const completeChkBtn = (item) => {
    if(item.isDone === false){
      console.log('yes')
      setWork([...work, item.isDone = true])
    } else {
      setWork([...work, item.isDone = false])
    }
    
  }

  // 삭제하기 버튼
  const removeBtn = (id) => {
    setWork(work.filter(work => work.id !== id));
  }

  return (
    <div id="wrap">
      <div className='contents'>
        <header>
          <h1><span className="red">To do</span> List.</h1>
          <p>React.js</p>
        </header>
        <article>
          <div className="register">
            <label htmlFor='title' className="red">제목</label><input name="title" onChange={addInputHandler} value={listInfo.title} placeholder="제목을 입력하세요" autoFocus />
            <label htmlFor='contnets' className="red">내용</label><input name="contents" onChange={addInputHandler} value={listInfo.contents} placeholder="내용을 입력하세요" />
            <button type='submit' onClick={registerBtn}>추가하기</button>
          </div>
          <h2>Working</h2>
          <section className="list">
            {
              work.filter((item) => item.isDone === false).map((item) => {
                return (<Working key={item.id} item={item} completeChkBtn={completeChkBtn} removeBtn={removeBtn} />)
              })
            }
          </section>
          <h2>Done</h2>
          <section className="list">
            {
              work.filter((item) => item.isDone === true).map((item) => {
                return (<Working key={item.id} item={item} completeChkBtn={completeChkBtn} removeBtn={removeBtn} />)
              })
            }
          </section>
        </article>
      </div>
    </div>
  );
};

export default App;
