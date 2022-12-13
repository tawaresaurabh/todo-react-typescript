import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ErrorText, ShowError, Todo, TodoState, TodoText} from "./interfaces";
import {newState} from "../App";


export const initialState: TodoState = {
    todoList: [],
    error: "",
    showError: false
}


const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: {
            reducer: (state, action: PayloadAction<Todo>) => {
                state.todoList.push(action.payload)
            },
            prepare: (todoText: string) => {
                return {
                    payload: {
                        todoText,
                        state: newState
                    },
                }
            }
        },
        removeTodo: {
            reducer: (state, action: PayloadAction<TodoText>) => {
                state.todoList = state.todoList.filter(todo => todo.todoText !== action.payload.todoText);
            },
            prepare: (todoText: string) => {
                return {
                    payload: {
                        todoText,
                    },
                }
            }
        },

        updateTodo: {
            reducer: (state, action: PayloadAction<Todo>) => {
                state.todoList = state.todoList.map(todo => todo.todoText === action.payload.todoText ? {...todo, state: action.payload.state} : todo);
            },
            prepare: (todoText: string, state: string) => {
                return {
                    payload: {
                        todoText,
                        state
                    },
                }
            }
        },

        setError: {
            reducer: (state, action: PayloadAction<ErrorText>) => {
                state.error = action.payload.error
            },
            prepare: (error: string) => {
                return {
                    payload: {
                        error,
                    },
                }
            }
        },


        setShowError: {
            reducer: (state, action: PayloadAction<ShowError>) => {
                state.showError = action.payload.showError
            },
            prepare: (showError: boolean) => {
                return {
                    payload: {
                        showError,
                    },
                }
            }
        },
    },
    extraReducers: () => {
        // Add reducers for additional action types here, and handle loading state as needed

    }

})

export const todoReducer = todoSlice.reducer;

export const actions  = todoSlice.actions
