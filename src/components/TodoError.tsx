import React from "react";
import {Alert} from "react-bootstrap";
import {actions} from "../config/slice";
import {useAppDispatch, useAppSelector} from "../config/hooks";


const TodoError = () => {

    const dispatch = useAppDispatch();
    const error = useAppSelector(state => state.error);
    const showError = useAppSelector(state => state.showError);


    const handleClose = () => {
        dispatch(actions.setShowError(false));
        dispatch(actions.setError(""));
    }

    if (showError) {
        return (
            <Alert variant="danger" onClose={handleClose} dismissible>
                <Alert.Heading>{error}</Alert.Heading>
            </Alert>
        )
    }

    return <></>


}

export default TodoError