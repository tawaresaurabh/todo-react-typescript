import React from "react";
import TodoItem from "./TodoItem";
import {Table} from "react-bootstrap";
import {useAppSelector} from "../config/hooks";


const TodoList = () => {

    const todoList = useAppSelector(state => state.todoList);

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
                    todoList.map((value, index) => <TodoItem todo={value} key={index}/>)
                }
                </tbody>
            </Table>

        );

    }

    return (<h3>No more todos!</h3>);


}


export default (TodoList)