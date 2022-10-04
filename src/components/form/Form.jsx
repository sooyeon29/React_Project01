import React, {useState} from "react";
import "./style.css"

let number = 3
function Form({todos, setTodos}) {
    
    const firsttodo = {
        id: 0,
        title: '',
        body: '',
        isDone: false
    }

    // console.log(todos)

    const [todo, setTodo] = useState(firsttodo)
    const onChangeHandler = (event) => {
        const {name,value} = event.target
        setTodo({...todo, [name] : value})
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        if (todo.title.trim() === "" || todo.body.trim() === "") return
        setTodos([...todos, {...todo, id: number}])
        setTodo(firsttodo)
        number++
    }
    
    return (
        <form onSubmit={onSubmitHandler} className="input-box">
            <div className="content-input">
                <label>제목</label>
                <input
                type='text'
                name='title'
                value={todo.title}
                onChange={onChangeHandler}
                />
                <label>내용</label>
                <input
                type='text'
                name='body'
                value={todo.body}
                onChange={onChangeHandler}
                />
            </div>
            <button type="submit" className="add-button">추가하기</button>
        </form>
    )
}

export default Form
































































// import React, {useState} from "react";
// import "./style.css"

// let number = 3
// function Form({todos, setTodos}) {
    
//     const firstshow = {id: 0,
//                         title:"",
//                         body:"",
//                         isDone: false}
//     console.log(todos)

//     const [todo, setTodo] = useState(firstshow)
//     const onChangeHandler = (event) => {
//         // 필요한 값을 받아오는 이벤트를 만들어 줄꺼임!
//         // 1) 제목에서 name과 value를 받아줌
//         // 2) 내용에서 name과 value를 받아줌
//         // 둘다 onChangeHandler을 가지고 있음으로 둘다 요 이벤트를 똑같이 적용
//         const{name,value} = event.target
//         setTodo({...todo, [name]:value})
//         // 요이벤트가 일어나고 나면 todo객체에서 firstshow의 값중 title과 body
//         // {title: "todo.title", body: "todo.body"} 값을 추가로 가지게 된다
//     }
//     const onSubmitHandler = (event) => {
//         event.preventDefault()
//         if (todo.title.trim() === "" || todo.body.trim() === "") 
//         return
//         setTodos([...todos, {...todo, id: number}])
//         setTodo(firstshow)
//         number++
//     }

//     return(
//         <form onSubmit={onSubmitHandler} className="input-box">
//             <div className="content-input">
//             <label>제목</label>
//             <input
//             type='text'
//             name="title"
//             value={todo.title}
//             onChange={onChangeHandler}
//             />
            
//             <label>내용</label>
//             <input
//             type='text'            
//             name="body"
//             value={todo.body}
//             onChange={onChangeHandler}
//             />
//             </div>
            
//             <button type="submit" className="add-button">추가하기</button>
//         </form>
        
//     )
// }

// export default Form

