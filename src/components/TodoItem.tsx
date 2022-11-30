import React from "react";
import {Badge, Button, Stack} from "react-bootstrap";
import {completedState, inProgressState, newState, Todo} from "../App";

interface Props {
    todo: Todo;
    onTodoRemove: (todoText: string) => void;
    onTodoUpdate: (todoText: string, state: string) => void;
}


const TodoItem: React.FC<Props> = ({todo, onTodoRemove, onTodoUpdate}: Props) => {

    const handleTodoUpdateMarkInProgress = () => {
        onTodoUpdate(todo.todoText, inProgressState);
    }

    const handleTodoUpdateReopen = () => {
        onTodoUpdate(todo.todoText, newState);
    }

    const handleTodoUpdateCompleted = () => {
        onTodoUpdate(todo.todoText, completedState);
    }
    const handleTodoRemove = () => {
        onTodoRemove(todo.todoText);
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

export default TodoItem;