


export interface TodoState {
    todoList: Todo[];
    error: string,
    showError: boolean
}


export interface Todo {
    todoText: string;
    state: string;
}
