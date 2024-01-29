import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {TodoList} from './components/Todo/TodoList'
import {InputField} from "./components/InputField";

function App() {
  const [count, setCount] = useState(0);
  const [todos,setTodos] = useState([]);
  const [text,setText] = useState('');
  const toggleTodoCompete = (todoId)=>{
    setTodos(
        todos.map(
            todo =>{
                if(todo.id!=todoId) return todo;
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
        )
    )
  }
  const addTodo = () =>{
      if(text.trim().length){
          setTodos([
              ...todos,
              {
                  id: new Date().toISOString(),
                  text,
                  completed: false
              }
          ]);
          setText('');
      }

  };
  const removeTodo=(todoId)=>{
      setTodos(todos.filter(todo => todo.id !== todoId));
    };
  return (
    <>
       <div>
           <InputField text={text} handleSubmit={addTodo} handleInput={setText}/>
           <TodoList todos = {todos} toggleTodoCompete={toggleTodoCompete} removeTodo={removeTodo}/>
       </div>
    </>
  )
}

export default App
