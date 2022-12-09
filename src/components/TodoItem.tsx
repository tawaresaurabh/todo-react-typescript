import React from "react";
import {Badge, Button, Stack} from "react-bootstrap";
import {completedState, inProgressState, newState} from "../App";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {Todo, TodoState} from "../config/interfaces";
import {removeTodo, setError, setShowError, updateTodo} from "../config/actions";

interface Props {
    todoList: Todo[],
    todo: Todo;
    removeTodo: (todoText: string) => void;
    updateTodo: (todoText: string, state: string) => void;
    setError: (error: string) => void;
    setShowError: (showError: boolean) => void;
}


const TodoItem = ({todoList, todo, removeTodo, updateTodo, setError, setShowError}: Props) => {



    const handleTodoRemove = () => {
        const lowerCaseTodoList = todoList.map(todo => todo.todoText.toLowerCase());
            const lowerCaseTodoText = todo.todoText.toLowerCase();

            if (lowerCaseTodoList.includes(lowerCaseTodoText)) {
                removeTodo(todo.todoText);
            } else {
                setError("Something went wrong!");
                setShowError(true);
            }

    }

    const handleUpdate = (state: string) => {
            const lowerCaseTodoList = todoList.map(todo => todo.todoText.toLowerCase());
            const lowerCaseTodoText = todo.todoText.toLowerCase();
            if (lowerCaseTodoList.includes(lowerCaseTodoText)) {
                updateTodo(todo.todoText, state);
            } else {
                setError("Something went wrong!");
                setShowError(true);
            }
    }

    const handleTodoUpdateMarkInProgress = () => {
        handleUpdate(inProgressState);
    }

    const handleTodoUpdateReopen = () => {
        handleUpdate(newState);
    }

    const handleTodoUpdateCompleted = () => {
        handleUpdate(completedState);
    }



    return (
        <tr>
            <td>
                <Stack direction={"horizontal"} gap={3}>
                    {todo.todoText}
                    <Badge bg="warning" text="dark">{todo.state}</Badge>
                </Stack>
            </td>

            <td>
                <Stack direction={"horizontal"} gap={3}>
                    <Button variant={"danger"} onClick={handleTodoRemove}> Remove </Button>
                    <Button variant={"success"} disabled={todo.state === completedState} onClick={handleTodoUpdateCompleted}> Complete </Button>
                    <Button variant={"primary"} disabled={todo.state === inProgressState} onClick={handleTodoUpdateMarkInProgress}> Mark in progress </Button>
                    <Button variant={"secondary"} disabled={todo.state === newState} onClick={handleTodoUpdateReopen}> Reopen </Button>
                </Stack>
            </td>
        </tr>
    )

}


function mapStateToProps(state: TodoState) {
    return {
        todoList: state.todoList,
    }
}

const mapDispatchToProps = (dispatch : Dispatch) => {
    return {
        removeTodo: (todoText: string) => dispatch(removeTodo(todoText)),
        updateTodo: (todoText: string, state: string) => dispatch(updateTodo(todoText, state)),
        setError: (error: string) => dispatch(setError(error)),
        setShowError: (showError: boolean) => dispatch(setShowError(showError)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem)
