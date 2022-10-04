import React, {useState} from "react";
import Todo from "../todo/Todo"
import "./style.css"

function List ({todos, setTodos}) {
    // --> 구조분해 할당과 props를 통해 TodoList로 부터 props를 받음
    // {todos, setTodos}를 받았다
const onDeleteHandler = (numx) => {
    // console.log(numx) ---> 여기서 콘솔을 찍어보면
    // numx의 값이 Form에서 지정해준 id값과 같은 것을 알수있다
    const newTodos = todos.filter((intodos) => {
        //todos는 input에 입력한 객체들을 가지고 있는 배열임으로
        //intodos는 객체들의 집합이다. 아래 콘솔로도 확인 가능하다
        // console.log(intodos)
        // console.log(intodos.id)        
        return intodos.id !== numx
        // 그러므로 한 박스의 intodos.id와 numx는 같은 값이된다.
        //(numx의 값은 intodos.id이다 --> 이는 Todo.jsx에서 지정해주었다.)
        //filter함수를 이용했음으로 같은 값일때 false가 되게 됨으로
    })
    setTodos(newTodos)
}
    // filter함수의 ture값만 담은 newTodos가 나오게 된다
    
// console.log(newTodos)
// console.log(onDeleteHandler)

const onEditHandler = (numx) => {
    const newTodos = todos.map((intodos) => {
        // map함수를 통해 dodos의 isDone부분을 확인하고 false -> ture ture->false로 변경해줍니다
        if(intodos.id === numx) {
            return {...intodos, isDone: !intodos.isDone}
        } else {
            return {...intodos}
        }
    })
    setTodos(newTodos)  //---> 그값을 newTodos로 받아 setTodos에 반영해줍니다!
    
}
    return(
        <div className="box-list">            
                <div className="working-box">
                <h2 className="working-name">Working🔥🔥🔥</h2>
                <div className="workbox">
                    {todos.map((intodos) => {
                        if (intodos.isDone === false) {
                            // console.log(intodos)
                            return (
                                <Todo intodos={intodos}
                                    key={intodos.id}      // -> key가 필요한이유! react에서 컴포넌트 배열을 렌터링 했을때 각 원소에서 변동이 있었는지 알아내려고 사용한다
                                    setTodos={setTodos}   //-> TodoList가 주는거
                                    onDeleteHandler={onDeleteHandler}
                                    onEditHandler={onEditHandler}
                                    />
                            )
                        } else {
                            return null
                        }
                    })}
                </div>
                </div>
                <div className="done-box">
                <h2 className="done-name">Done🎉🎉🎉</h2>
                <div className="donebox">
                    {todos.map((intodos) => {
                        if (intodos.isDone) {
                            return (
                                <Todo intodos={intodos}
                                    key={intodos.id}
                                    setTodos={setTodos}
                                    onDeleteHandler={onDeleteHandler}
                                    onEditHandler={onEditHandler}
                                    />
                            )
                        } else {
                            return null
                        }
                    })}
                </div>
            </div>
            </div>        
    )
}

export default List


































// import React from "react";
// import Todo from "../todo/Todo";
// import "./style.css"

// function List ({todos, setTodos}) {
//     const onDeleteHandler = (erase) => {
//         const newTodos = todos.filter((todo) => {
//             return todo.id !== erase
//         })
//         setTodos(newTodos)
//     }

//     const onSubmitHandler = (erase) => {
//         const newTodos = todos.map((todo) => {
//             if(todo.id === erase) {
//                 return {
//                     ...todo,
//                     isDone: !todo.isDone
//                 }
//             } else {
//                 return {...todo}
//             }
//         })
//         setTodos(newTodos)
//     }
// }


// export default List