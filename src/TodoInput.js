import React,{useState} from 'react'

function TodoInput(props) {
const [todoItem,settodoItem] = useState('');
const withenter = (e)=>{    
    if(e.keyCode === 13){
        props.addTodo(todoItem);
        settodoItem('')
    }
}
  return (
    <div className="main-inp">
        <input type="text" name="input-box" value={todoItem} className="input-box" onChange={(e)=>{settodoItem(e.target.value)}} onKeyDown={withenter}/>
        <button type="button" className="btn" onClick={()=>{props.addTodo(todoItem); settodoItem('')}}><i class="fa-solid fa-plus fa-xl"></i></button>
        
        
    </div>
  )
}

export default TodoInput
