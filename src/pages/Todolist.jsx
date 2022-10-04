import React, { useState } from "react";
import Layout from "../components/layout/Layout"
import Header from "../components/header/Header"
import Form from "../components/form/Form"
import List from "../components/list/List"

function TodoList () {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: '리액트 공부하기',
            body: '리액트 기초를 공부해봅시다.',
            isDone: false
        },
        {
            id: 2,
            title: '리액트 공부하기',
            body: '리액트 기초를 공부해봅시다.',
            isDone: true
        }
    ])
    
    return (
    <Layout>
        <Header/>
        <Form todos={todos} setTodos={setTodos}/>         
        <List todos={todos} setTodos={setTodos} />
    </Layout>
    )
}

export default TodoList

//자식 Header 에게 값을 받았다
//자식 Form에게 todos={todos} setTodos={setTodos} 라는 값을 주고 나온 리턴값을 받았다
//자식 List에게 todos={todos} setTodos={setTodos} 라는 값을 주고 나온 리턴값을 받았다