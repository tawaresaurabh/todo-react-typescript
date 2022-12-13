import React from 'react';

import TodoText from "./components/TodoText";
import TodoList from "./components/TodoList";
import {Container, Stack} from "react-bootstrap";
import TodoError from "./components/TodoError";
import {Provider} from "react-redux";
import configureAppStore from "./config/store";
import {initialState} from "./config/slice";


export const newState = "NEW";
export const inProgressState = "IN PROGRESS";
export const completedState = "COMPLETED";

const preloadedState = initialState;

const clientStore = configureAppStore(preloadedState)




export type RootState = ReturnType<typeof clientStore.getState>

export type AppDispatch = typeof clientStore.dispatch


function App() {

    return (
        <Provider store={clientStore} serverState={preloadedState}>
        <Container>
            <Stack gap={3}>
                <h3>My Todo app</h3>
                <TodoError/>
                <TodoText/>
                <TodoList/>
            </Stack>
        </Container>
        </Provider>
    );
}

export default App;


