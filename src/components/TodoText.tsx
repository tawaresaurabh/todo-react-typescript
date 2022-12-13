import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {actions} from "../config/slice";
import {useAppDispatch, useAppSelector} from "../config/hooks";


const TodoText = () => {
    const [todoText, setTodoText] = useState<string>("");

    const todoList = useAppSelector(state => state.todoList);
    const showError = useAppSelector(state => state.showError);


    const dispatch = useAppDispatch();

    const handleAdd = () => {
        const lowerCaseTodoList = todoList.map(todo => todo.todoText.toLowerCase());
        const lowerCaseTodoText = todoText.toLowerCase().trim();

        if (lowerCaseTodoList.includes(lowerCaseTodoText)) {
            dispatch(actions.setError(`To do : ${todoText} already present`));
            dispatch(actions.setShowError(true))
        } else {
            dispatch(actions.addTodo(todoText.trim()))
            if(showError){
                dispatch(actions.setShowError(false))
                dispatch(actions.setError(""))
            }
        }
        setTodoText("");
    }


    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        setTodoText(e.target.value);
    }

    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Enter to do" value={todoText} onChange={onChange} name={"addTodoField"}/>
            </Form.Group>
            <Button name={"addTodoButton"} type={"button"} variant={"success"} onClick={handleAdd} disabled={todoText.length === 0}>submit</Button>
        </Form>

    );
}



export default (TodoText)