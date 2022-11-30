import React, {useState} from 'react';

import TodoText from "./components/TodoText";
import TodoList from "./components/TodoList";
import {Container, Stack} from "react-bootstrap";
import TodoError from "./components/TodoError";


export const newState = "NEW";
export const inProgressState = "IN PROGRESS";
export const completedState = "COMPLETED";

export interface Todo {
    todoText: string;
    state: string;
}


function App() {

    const [todoList, setTodoList] = useState<Todo[]>([]);
    const [error, setError] = useState<string>("");
    const [showError, setShowError] = useState<boolean>(false);

    const addTodo = (todoText: string) => {
        const lowerCaseTodoList = todoList.map(todo => todo.todoText.toLowerCase());
        const lowerCaseTodoText = todoText.toLowerCase().trim();

        if (lowerCaseTodoList.includes(lowerCaseTodoText)) {
            setError(`To do : ${todoText} already present`)
            setShowError(true);
        } else {
            const todo = {todoText: todoText.trim(), state: newState}
            setTodoList([...todoList, todo]);
            setShowError(false);
        }

    }

    const removeTodo = (todoText: string) => {
        const lowerCaseTodoList = todoList.map(todo => todo.todoText.toLowerCase());
        const lowerCaseTodoText = todoText.toLowerCase();

        if (lowerCaseTodoList.includes(lowerCaseTodoText)) {
            const deletedTodo = todoList.filter(todo => todo.todoText !== todoText);
            setTodoList([...deletedTodo])
        } else {
            setError("Something went wrong!");
            setShowError(true);
        }
    }

    const updateTodo = (todoText: string, state: string) => {
        const lowerCaseTodoList = todoList.map(todo => todo.todoText.toLowerCase());
        const lowerCaseTodoText = todoText.toLowerCase();

        if (lowerCaseTodoList.includes(lowerCaseTodoText)) {
            const updatedTodo = todoList.map(todo => todo.todoText === todoText ? {...todo, state: state} : todo);
            setTodoList([...updatedTodo])
        } else {
            setError("Something went wrong!");
            setShowError(true);
        }
    }


    return (
        <Container>
            <Stack gap={3}>
                <h3>My Todo app</h3>
                <TodoError error={error} show={showError} setShowError={setShowError}/>
                <TodoText onTodoSubmit={addTodo}/>
                <TodoList todoList={todoList} onTodoUpdate={updateTodo} onTodoRemove={removeTodo}/>
            </Stack>
        </Container>
    );
}

export default App;
