import React from 'react';
import { useState } from 'react';
import Working from './component/WorkList';
import Done from './component/DoneList';
import './App.css';


const App = () => {
  const [work, setWork] = useState([
    { id: 1, title: '리액트 공부하기', contents: '리액트를 열심히 공부해봅시다!', isDone: false },
    { id: 2, title: '리액트 공부하기', contents: '리액트를 열심히 공부해봅시다!', isDone: false }
  ])

  const [done, setDone] = useState([
    { id: 1, title: '자바스크립트 공부하기', contents: '자바스크립트를 열심히 공부해보자', isDone: true }
  ])

  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const addTitleHandler = (e) => {
    setTitle(e.target.value);
  }
  const addContentHandler = (e) => {
    setContents(e.target.value);
  }

  // 등록하기 버튼
  const registerBtn = () => {
    const list = {
      id: work.length + 1,
      title,
      contents,
    };

    if(title.length == 0 || contents.length == 0){
      alert('내용을 입력해주세요')
    } else {
      setWork([...work, list]);
      setTitle('');
      setContents('');
    }

    
  }

  // 삭제하기 버튼
  const removeBtn = (id, complete) => {
    if (complete !== true) {
      setWork(work.filter(work => work.id !== id));
    } else {
      setDone(done.filter(done => done.id !== id));
    };

  }

  // 완료 상태 취소하기 버튼
  const todoBtn = (id, title, contents) => {
    const list = {
      id: work.length + 1,
      title,
      contents,
      isDone: false
    };
    setDone(done.filter(a => a.id !== id));
    setWork([...work, list]);
  }

  // 완료하기 버튼
  const completeBtn = (id, title, contents) => {
    const list = {
      id: done.length + 1,
      title,
      contents,
      isDone: true

    };
    setWork(work.filter(work => work.id !== id));
    setDone([...done, list]);
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
            <span className="red">제목</span><input onChange={addTitleHandler}  value={title} placeholder="제목을 입력하세요" autoFocus/>
            <span className="red">내용</span><input onChange={addContentHandler} value={contents} placeholder="내용을 입력하세요"/>
            <button onClick={registerBtn}>추가하기</button>
          </div>
          <h2>Working</h2>
          <div className="list">
            {
              work.map((item) => {
                return (<Working key={item.id} item={item} completeBtn={completeBtn} removeBtn={removeBtn} />)
              })
            }
          </div>
          <h2>Done</h2>
          <div className="list">
            {
              done.map((item) => {
                return (<Done key={item.id} item={item} todoBtn={todoBtn} removeBtn={registerBtn} />)
              })
            }
          </div>
        </article>
      </div>
    </div>
  );
};

export default App;
