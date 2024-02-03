import {useDispatch} from "react-redux";
import {changeFilters} from '../../store/filterSlice'
export const Filter = ()=>{
    const dispatch = useDispatch();
    return(
        <div>
            <button onClick={()=>dispatch(changeFilters('all'))}>ALL</button>
            <button onClick={()=>dispatch(changeFilters('checked'))}>checked</button>
            <button onClick={()=>dispatch(changeFilters('not'))}>Not checked</button>
        </div>
    )
}