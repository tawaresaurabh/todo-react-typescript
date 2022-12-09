import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {Todo, TodoState} from "../config/interfaces";
import {addTodo, setError, setShowError} from "../config/actions";



interface Props {
    todoList: Todo[];
    showError: boolean;
    addTodo: (todoText: string) => void;
    setError: (error: string) => void;
    setShowError: (showError: boolean) => void;
}


const TodoText = ({todoList, showError ,addTodo, setError, setShowError}: Props) => {
    const [todoText, setTodoText] = useState<string>("");



    const handleAdd = () => {
        const lowerCaseTodoList = todoList.map(todo => todo.todoText.toLowerCase());
        const lowerCaseTodoText = todoText.toLowerCase().trim();

        if (lowerCaseTodoList.includes(lowerCaseTodoText)) {
            setError(`To do : ${todoText} already present`)
            setShowError(true);
        } else {
            addTodo(todoText.trim())
            if(showError){
                setShowError(false);
                setError("");
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



function mapStateToProps(state : TodoState) {
    return{
        todoList: state.todoList,
        showError: state.showError,
    }
}


const mapDispatchToProps = (dispatch : Dispatch) => {
    return {
        addTodo: (todoText: string) => dispatch(addTodo(todoText)),
        setError: (error: string) => dispatch(setError(error)),
        setShowError: (showError: boolean) => dispatch(setShowError(showError)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoText)