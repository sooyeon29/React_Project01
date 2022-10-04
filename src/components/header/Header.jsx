import React from "react";
import "./style.css"

function Header () {
    return(
        <div className="head">
            <div>My Todo List</div>
            <div>React</div>
        </div>
    )
}

export default Header

// 해당값이 부모인 Todolist로 보내진다