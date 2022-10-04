import React from "react";
import "./style.css"

function Todo({intodos, onDeleteHandler, onEditHandler}) {

    // console.log(intodos)
    return (
        <div>
            <h2>{intodos.title}</h2>
            <div>{intodos.body}</div>
            <div className="but-wrap">
                <button onClick={() => onDeleteHandler(intodos.id)}>
                    삭제하기
                </button>
                <button onClick={() => onEditHandler(intodos.id)}>
                    {intodos.isDone ? '취소':'완료'}
                </button>
            </div>
        </div>

        

    )
}

export default Todo



































// import React from "react";
// import "./style.css"

// function Todo ({todo, onDeleteHandler, onSubmitHandler}) {

//     return (
//         <div className="todo-container">
//             <div>
//                 <h2 className="todo-title">{todo.title}</h2>
//                 <div>{todo.body}</div>
//             </div>
//             <div className="button-set">
//                 <button
//                 className="del-but"
//                 onClick={() => onDeleteHandler(todo.id)}
//                 >
//                     삭제하기
//                 </button>
//                 <button
//                 className="smt-but"
//                 onClick={() => onSubmitHandler(todo.id)}
//                 >
//                     {todo.isDone ? "취소": "완료"}
//                 </button>
//             </div>
           
//         </div>
//     )
// }

// export default Todo