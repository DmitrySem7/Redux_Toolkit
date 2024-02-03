import {createSelector, createSlice} from "@reduxjs/toolkit";

const initialState= {
    status: "all",
};
const FilterSlice = createSlice({
    name:"filters",
    initialState,
    reducers: {
        changeFilters: (state,action)=>{
            state.status = action.payload
        },
    }
});

export const {changeFilters} = FilterSlice.actions;
export default FilterSlice.reducer;