import React from "react";
import {Badge, Button, Stack} from "react-bootstrap";
import {completedState, inProgressState, newState} from "../App";
import {Todo} from "../config/interfaces";
import {actions} from "../config/slice";
import {useAppDispatch, useAppSelector} from "../config/hooks";


interface Props {
    todo: Todo;
}


const TodoItem = ({todo}: Props) => {

    const dispatch = useAppDispatch();
    const todoList = useAppSelector(state => state.todoList)

    const handleTodoRemove = () => {
        const lowerCaseTodoList = todoList.map(todo => todo.todoText.toLowerCase());
            const lowerCaseTodoText = todo.todoText.toLowerCase();

            if (lowerCaseTodoList.includes(lowerCaseTodoText)) {
                dispatch(actions.removeTodo(todo.todoText));
            } else {
                dispatch(actions.setError("Something went wrong!"));
                dispatch(actions.setShowError(true));
            }

    }

    const handleUpdate = (state: string) => {
            const lowerCaseTodoList = todoList.map(todo => todo.todoText.toLowerCase());
            const lowerCaseTodoText = todo.todoText.toLowerCase();
            if (lowerCaseTodoList.includes(lowerCaseTodoText)) {
                dispatch(actions.updateTodo(todo.todoText,state));
            } else {
                dispatch(actions.setError("Something went wrong!"));
                dispatch(actions.setShowError(true));
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



export default TodoItem
