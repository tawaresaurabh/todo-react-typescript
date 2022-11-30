import React from "react";
import TodoItem from "./TodoItem";
import {Table} from "react-bootstrap";
import {Todo} from "../App";


interface Props {
    todoList: Todo[];
    onTodoRemove: (todoText: string) => void;
    onTodoUpdate: (todoText: string, state: string) => void;
}

const TodoList: React.FC<Props> = ({todoList, onTodoUpdate, onTodoRemove}: Props) => {

    if (todoList.length > 0) {
        return (

            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>To do</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>

                {
                    todoList.map((value, index) => <TodoItem onTodoRemove={onTodoRemove} onTodoUpdate={onTodoUpdate} todo={value} key={index}/>)
                }
                </tbody>
            </Table>

        );

    }

    return (<h3>No more todos!</h3>);


}

export default TodoList;