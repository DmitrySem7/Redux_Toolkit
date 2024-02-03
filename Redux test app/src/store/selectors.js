import {createSelector} from "@reduxjs/toolkit";
let selectorTodos = state =>state.todos.todos;
let selectorFilters = state =>state.filters.status;
export const selector = createSelector([selectorTodos,selectorFilters],(allTodos,activeFilter)=>{
    if (activeFilter === 'all') return allTodos;
    if (activeFilter === 'checked') {
        return allTodos.filter(todo => todo.completed);
    }
    if (activeFilter === 'not') {
        return allTodos.filter(todo => !todo.completed);
    }
    return allTodos;
});