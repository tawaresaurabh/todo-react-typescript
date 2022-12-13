


export interface TodoState {
    todoList: Todo[];
    error: string,
    showError: boolean
}


export interface Todo {
    todoText: string;
    state: string;
}


export interface TodoText {
    todoText: string;
}

export interface ErrorText {
    error: string;
}


export interface ShowError {
    showError: boolean;
}