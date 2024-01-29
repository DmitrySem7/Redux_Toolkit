import {useDispatch} from "react-redux";
import {removeTodo,toggleTodoComplete} from "../../store/todoSlice";

export const TodoItem = ({id,text,completed})=>{
    const dispatcher = useDispatch();
    return(
          <li key={id}>
              <input type="checkbox" checked={completed} onChange={()=>{dispatcher(toggleTodoComplete({id}))}}/>
              <span>{text}</span>
              <span className="delete" onClick={()=>dispatcher(removeTodo({id}))}>&#9940;</span>
          </li>
    );
}