import logo from './logo.svg';
import React,{useState} from 'react'

import './App.css';
import TodoInput from './TodoInput';
import TodoOutput from './TodoOutput';

function App() {
  const [todoListItems,settodoListItems] = useState([]);
  let addTodo = (e)=>{if(e!='')settodoListItems([...todoListItems,e]);}


  const deleteTodo = (key)=>{
    let newTodo = [...todoListItems]
    newTodo.splice(key,1)
    settodoListItems([...newTodo])
  }
  return (
    <div className="App">
      <div className="main">
        <TodoInput addTodo = {addTodo}/>
        <h1 className='main-heading'>
            TODOs
        </h1>
        {
          todoListItems.map((listitem,i)=>{
            return(
              <TodoOutput key ={i} index = {i} items={listitem} deleteTodo = {deleteTodo}/>

            )
          })
        }
      </div>
    </div>
  );
}

export default App;
