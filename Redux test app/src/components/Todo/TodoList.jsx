import {TodoItem} from './TodoItem';
export const TodoList = ({todos,removeTodo,toggleTodoCompete})=>{

    return <>
        <ul>
            {
                todos.map(todo => <TodoItem key={todo.id} removeTodo={removeTodo} toggleTodoCompete={toggleTodoCompete} {...todo}/>)
            }
        </ul>
    </>
}