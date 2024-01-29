import { useState } from 'react'
import {useDispatch} from "react-redux";
import './App.css'
import {TodoList} from './components/Todo/TodoList'
import {InputField} from "./components/InputField";
import {addTodo} from "./store/todoSlice";

function App() {
  const [text,setText] = useState('');
    const dispatch = useDispatch();
  const addTask= () => {
      dispatch(addTodo({text}));
      setText('');
  }

  return (
    <>
       <div>
           <InputField text={text} handleSubmit={addTask} handleInput={setText}/>
           <TodoList />
       </div>
    </>
  )
}

export default App
