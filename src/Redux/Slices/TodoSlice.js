import { createSlice } from "@reduxjs/toolkit";

export const TodoSlice = createSlice({
    name: 'todo',
    initialState: {
        todoList: [],
    },
    reducers: {
        addTask: (state, action) => {
            state.todoList = [...state.todoList, action.payload]
        },
        deleteTask: (state, action) => {
            state.todoList = state.todoList.filter((item, index) => index !== action.payload)
        },
        editTask: (state, action) => {
            state.todoList[action.payload.index] = action.payload.value
        },
        clearAllTask: (state) => {
            state.todoList = []
        },
        default: (state) => {
            return state
        }
    }
})

export const { addTask, deleteTask, editTask, clearAllTask } = TodoSlice.actions

export default TodoSlice.reducer 