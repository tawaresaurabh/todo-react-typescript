import { createReducer } from '@reduxjs/toolkit'
import {addTodo, removeTodo, setError, setShowError, updateTodo} from "./actions";
import {TodoState} from "./interfaces";



export const initialState: TodoState = {
    todoList: [],
    error: "",
    showError: false
}

export const todoReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addTodo, (state, action) => {
            state.todoList.push(action.payload)
        })
        .addCase(removeTodo, (state, action) => {
           state.todoList =  state.todoList.filter(todo => todo.todoText !== action.payload.todoText);
        })
        .addCase(updateTodo, (state, action) => {
            state.todoList = state.todoList.map(todo => todo.todoText === action.payload.todoText ? {...todo, state: action.payload.state} : todo);
        })
        .addCase(setError, (state, action) => {
            state.error = action.payload.error
        })
        .addCase(setShowError, (state, action) => {
            state.showError = action.payload.showError
        })
})

