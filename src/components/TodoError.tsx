import React from "react";
import {Alert} from "react-bootstrap";

import {Dispatch} from "redux";
import {connect} from "react-redux";
import {TodoState} from "../config/interfaces";
import {setShowError} from "../config/actions";

interface Props {
    error: string;
    showError: boolean;
    setShowError: (showError: boolean) => void

}

const TodoError = ({error, showError, setShowError}: Props) => {

    if (showError) {
        return (
            <Alert variant="danger" onClose={() => setShowError(false)} dismissible>
                <Alert.Heading>{error}</Alert.Heading>
            </Alert>
        )
    }

    return <></>


}



function mapStateToProps(state : TodoState) {
    return{
        error: state.error,
        showError: state.showError
    }
}

const mapDispatchToProps = (dispatch : Dispatch) => {
    return {
        setShowError: (showError: boolean) => dispatch(setShowError(showError)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoError)