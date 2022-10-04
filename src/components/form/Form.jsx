import React, {useState} from "react";
import "./style.css"

let number = 3
function Form({todos, setTodos}) {
// 구조분해 할당과 Props!!
// 부모인 TodoList로 부터 {todos, setTodos}라는 props를 받았다

    const firsttodo = {
        id: 0,
        title: '',
        body: '',
        isDone: false
    }
    const [todo, setTodo] = useState(firsttodo)
// 새로운 객체 todo(firsttodo는 todo의 초기값)의 등장
// ---> 이 훅을 이용하여 setTodo를 구한다

    const onChangeHandler = (event) => {
        const {name,value} = event.target
        setTodo({...todo, [name] : value})
    }
    // ---> 원하는 값을 찾아내기 위한 이벤트 함수를 만들어준다
    // onChangeHandler가 들은 타겟에서 원하는 값을 찾아준다
    //여기서는 {name,value}
    //찾은 값을 통해 setTodo를 완성해준다

    const onSubmitHandler = (event) => {
        event.preventDefault()
        //---> 기본 동작을 실행하지 않게해주는 메서드!!
        //-> onSubmitHandler가 받는 이벤트의 경우 todos와setTodos를 받고있으므로
        // 해당 메서드를 작성해주지 않으면 계속 초기값으로 돌아간다
        //onSubmit은 기본적으로 호툴될 때 페이지를새로고침하는 효과가 있기때문!
        //그래도 onSubmit을 사용하는 이유는 이를 사용하면onClick 과 다르게 엔터를 치는것으로도 값입력가능
        if (todo.title.trim() === "" || todo.body.trim() === "") return
        //.trim()은 공백을 지워주는 메서드로 위의 if문의 경우 
        //작성한 사항의 앞뒤 공백을 지워주며, 빈칸이거나 스페이스바만 쳐서 값이 없는경우에는 값이 나오지 않는다
        setTodos([...todos, {...todo, id: number}])
        setTodo(firsttodo)   //---> 요거가 있어야지 추가하기 버튼을 누른 후 input박스가 비워진다 아니면 내가 입력한 값이 남아있다        
        //setTodos의 값은 onChangeHandler에서 받은 todo객체의 값을 todos에 넣어준값
        number++
        //todos의 기본값으로 id: 1 과 2를 사용해주었으므로 함수시작전 number=3으로 주어줬음
        //그러므로 id는 3부터 ++된 숫자들로 들어감
        console.log(todos.id)
    }
    
    return (
        <form onSubmit={onSubmitHandler} className="input-box">
            {/* 이벤트 함수를 만들기 위하여 onSubmit을 사용!*/}
            <div className="content-input">
                <label>제목</label>
                <input
                type='text'
                name='title'
                value={todo.title}
                onChange={onChangeHandler}
                />
            {/* input박스에 입력되는 값을 text로 해주고 받을 값을 지정해줌
            그리고 이벤트 함수를 만들기 위해 onChange를 사용!*/}
                
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

