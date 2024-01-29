export const TodoItem = ({id,text,completed,removeTodo,toggleTodoCompete})=>{
    return(
          <li key={id}>
              <input type="checkbox" checked={completed} onChange={()=>{toggleTodoCompete(id)}}/>
              <span>{text}</span>
              <span className="delete" onClick={()=>removeTodo(id)}>&#9940;</span>
          </li>
    );
}