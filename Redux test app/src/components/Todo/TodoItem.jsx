import {useDispatch} from "react-redux";
import {deleteTodo,toggleStatus} from "../../store/todoSlice";

export const TodoItem = ({id,title,completed})=>{
    const dispatcher = useDispatch();
    return(
          <li key={id}>
              <input type="checkbox" checked={completed} onChange={()=>{dispatcher(toggleStatus(id))}}/>
              <span>{title}</span>
              <span className="delete" onClick={()=>dispatcher(deleteTodo(id))}>&#9940;</span>
          </li>
    );
}