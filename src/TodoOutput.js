import React from 'react'

function TodoOutput(props) {
  return (
    <div className="main-output">
        
        <li className="list-itm">
            {props.items}
            <span><i className="fa-solid fa-trash-can " onClick={(e)=>{props.deleteTodo(props.index)}}></i></span>
        </li>
    </div>
  )
}

export default TodoOutput
