import React from "react";
import {Alert} from "react-bootstrap";

interface Props {
    error: string;
    show: boolean;
    setShowError: (show: boolean) => void

}

const TodoError: React.FC<Props> = ({error, show, setShowError}: Props) => {

    if (show) {
        return (
            <Alert variant="danger" onClose={() => setShowError(false)} dismissible>
                <Alert.Heading>{error}</Alert.Heading>
            </Alert>
        )
    }

    return <></>


}

export default TodoError;