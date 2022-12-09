import React from "react";
import TodoItem from "./TodoItem";
import {Table} from "react-bootstrap";
import {connect} from "react-redux";
import {Todo, TodoState} from "../config/interfaces";


interface Props {
    todoList: Todo[];
}

const TodoList = ({todoList}: Props) => {

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


function mapStateToProps(state: TodoState) {
    return {
        todoList: state.todoList,
    }
}


export default connect(mapStateToProps, null)(TodoList)