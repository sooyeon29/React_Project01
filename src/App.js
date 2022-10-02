import React, {useState} from 'react';
import './App.css';

function App() {
  return ( 
    
    <addbox/>
  );
}

function Addbox () {
  const [{title:setTitle, 
        comment:setComment}] 
    = useState(<div className='workingbox'>
                <h3>Working..🔥</h3>
                <div>
                  <h4>리액트 공부하기</h4>
                  <span>리액트 기초를 공부해봅시다.</span>
                  <div>
                    <button>삭제하기</button>
                    <button>완료</button>
                  </div>
                </div>
              </div>)

  const onChangeHandler = (event) => {
    const inputNote = event.target.inputNote
    setNote(inputNote)
  }
  return( <workbox/>

  )
}

function workbox () {
  return( <donebox/>

  )
}

function donebox () {
  return(
    // 박스모음
    <div>
      <div className="Top">
      My Todo List React
      </div>

      {/* new add */}
      <div className='addbox'>
        <span>제목</span>
        <input></input>
        <span>내용</span>
        <input></input>
        <button onClick>추가하기</button>
      </div>

      {/* working box */}
      <div className='workingbox'>
        <h3>Working..🔥</h3>
        <div>
          <h4>리액트 공부하기</h4>
          <span>리액트 기초를 공부해봅시다.</span>
          <div>
            <button>삭제하기</button>
            <button>완료</button>
          </div>
        </div>
      </div>

      {/* Done box */}
      <div className='donebox'>
        <h3>Done..🎉</h3>
        <div>
          <h4>리액트 공부하기</h4>
          <span>리액트 기초를 공부해봅시다.</span>
          <div>
            <button>삭제하기</button>
            <button>완료</button>
          </div>
        </div>
      </div>

    </div>

  )
}

export default App;
