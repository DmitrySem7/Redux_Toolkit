import { useState,useEffect } from 'react'
import {useDispatch,useSelector} from "react-redux";
import './App.css'
import {TodoList} from './components/Todo/TodoList'
import {InputField} from "./components/InputField";
import {addNewTodo, fetchTodos} from "./store/todoSlice";
import {Filter} from "./components/Todo/Filter";

function App() {
    const [text,setText] = useState('');
    const dispatch = useDispatch();
    const {status,error} = useSelector(state => state.todos);
  const addTask= () => {
      dispatch(addNewTodo(text));
      setText('');
  }
  useEffect(()=>{
      dispatch(fetchTodos());
  },[dispatch]);
  return (
    <>
       <div>
           <Filter/>
           <InputField text={text} handleSubmit={addTask} handleInput={setText}/>
           {status === 'loading' && <h2>Loading...</h2>}
           {error && <h2>An error occerd: {error}</h2>}
           <TodoList />
       </div>
    </>
  )
}

export default App
