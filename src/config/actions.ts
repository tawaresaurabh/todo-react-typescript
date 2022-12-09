import {createAction} from "@reduxjs/toolkit";
import {newState} from "../App";

const ACTIONS = {
    ADD_TODO: 'ADD_TODO',
    UPDATE_TODO: 'UPDATE_TODO',
    REMOVE_TODO: 'REMOVE_TODO',
    SET_ERROR: 'SET_ERROR',
    SET_SHOW_ERROR: 'SET_SHOW_ERROR'
}


export const addTodo = createAction(ACTIONS.ADD_TODO,  function (todoText: string){
    return{
        payload: {
            todoText,
            state: newState
        },
    }
});

export const removeTodo = createAction(ACTIONS.REMOVE_TODO,  function (todoText: string){
    return{
        payload: {
            todoText,
        },
    }
});

export const updateTodo = createAction(ACTIONS.UPDATE_TODO,  function (todoText: string, state: string){
    return{
        payload: {
            todoText,
            state
        },
    }
});

export const setError = createAction(ACTIONS.SET_ERROR,  function (error: string){
    return{
        payload: {
            error,
        },
    }
});

export const setShowError = createAction(ACTIONS.SET_SHOW_ERROR,  function (showError: boolean){
    return{
        payload: {
            showError,
        },
    }
});


