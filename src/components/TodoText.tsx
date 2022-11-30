import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";


interface Props {
    onTodoSubmit: (todoText: string) => void;
}


const TodoText: React.FC<Props> = ({onTodoSubmit}: Props) => {
    const [todoText, setTodoText] = useState<string>("");

    const handleAdd = () => {
        onTodoSubmit(todoText);
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

export default TodoText;