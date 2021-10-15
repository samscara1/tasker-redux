import { createSlice } from '@reduxjs/toolkit';

const taskerSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
    },
    reducers: {
        addTask(state, action) {
            state.tasks.push({
                id: new Date().getTime().toString(),
                title: action.payload.text
            });
        },
    },
});

export const {addTask} = taskerSlice.actions;

export default taskerSlice.reducer;