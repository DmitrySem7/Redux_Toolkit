import {TodoItem} from './TodoItem';
import {useSelector} from 'react-redux'
import {selector} from '../../store/selectors';
export const TodoList = ()=>{
    //const todos = useSelector(state => state.todos.todos);
    const todos = useSelector(selector);
    console.log("render");
    return <>
        <ul>
            {   !todos ? <div>not record (not loading)</div> : todos.map(todo => <TodoItem key={todo.id} {...todo}/>)
            }
        </ul>
    </>
}