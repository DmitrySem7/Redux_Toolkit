import {configureStore} from "@reduxjs/toolkit";
import todoReducer from './todoSlice';
import FilterReducer from './filterSlice'
export default configureStore({
   reducer: {
      todos:todoReducer,
      filters:FilterReducer
   }

});