import React, {useState} from "react";
import Todo from "../todo/Todo"
import "./style.css"

function List ({todos, setTodos}) {
const onDeleteHandler = (numx) => {
    const newTodos = todos.filter((intodos) => {
        return intodos.id !== numx
        
    })
    setTodos(newTodos)
}
console.log(onDeleteHandler)

const onEditHandler = (numx) => {
    const newTodos = todos.map((intodos) => {
        if(intodos.id === numx) {
            return {...intodos, isDone: !intodos.isDone}
        } else {
            return {...intodos}
        }
    })
    setTodos(newTodos)
}
    return(
        <div className="box-list">            
                <div className="working-box">
                <h2 className="working-name">Working🔥🔥🔥</h2>
                <div className="workbox">
                    {todos.map((intodos) => {
                        if (!intodos.isDone) {
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