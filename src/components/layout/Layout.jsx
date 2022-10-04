import React from "react";
import "./style.css"

function Layout(props) {
    // console.log(props)
    return <div className="layout">{props.children}</div>
}

export default Layout

// 즉, Layout 컴포넌트가 쓰여지는 모든 곳에서 
// <Layout>...</Layout>안에 있는 정보를 받아서 가져올 수 있다. 
// 그러므로 여기서는 Layout컴포넌트가 가지고 있는 css특징이
// Layout>...</Layout>안에있는 모든 곳에 적용된다
