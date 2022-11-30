import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';



describe('General UI', () => {
    // Applies only to tests in this describe block
    // beforeEach(() => {
    //     return initializeFoodDatabase();
    // });

    test('My todo in the page', () => {
        render(<App />);
        const linkElement = screen.getByText(/My Todo app/i);
        const noTodos = screen.getByText(/No more todos!/i);
        expect(linkElement).toBeInTheDocument();
        expect(noTodos).toBeInTheDocument();
        const input = screen.getByPlaceholderText("Enter to do");
        const todoButton = screen.getByText("submit")
        expect(todoButton).toBeDisabled();
        expect(input).toBeEmptyDOMElement();
    });



    test('Start typing in todo text box', () => {
        render(<App />);
        const input = screen.getByPlaceholderText("Enter to do");
        const todoButton = screen.getByText("submit")
        expect(todoButton).toBeDisabled();
        expect(input).toBeEmptyDOMElement();
        fireEvent.change(input, { target: { value: "something" } })
        expect(todoButton).not.toBeDisabled();
    });
});


describe('Todo add/update/remove', () => {

    const addTodo = (todoText: string) => {
        const input = screen.getByPlaceholderText("Enter to do");
        const todoButton = screen.getByText("submit")
        fireEvent.change(input, { target: { value: todoText } })
        fireEvent.click(todoButton)

    }


    const removeTodo = () => {
        const todoButton = screen.getByText("Remove")
        fireEvent.click(todoButton)
    }


    const updateTodo = (action:string) => {
        const stateButton = screen.getByText(action)
        fireEvent.click(stateButton)
        expect(stateButton).toBeDisabled()
    }

    test('Add To do and verify it got added', () => {
        render(<App />);
        addTodo("MY_TEST_TODO");
        const testTodoElement = screen.getByText("MY_TEST_TODO")
        const newTagElement = screen.getByText("NEW")
        expect(testTodoElement).toBeInTheDocument();
        expect(newTagElement).toBeInTheDocument();
        const reOpenButton = screen.getByText("Reopen");
        expect(reOpenButton).toBeDisabled();


    });


    test('Add To do And remove it', () => {
        render(<App />);
        addTodo("MY_TEST_TODO");
        const testTodoElement = screen.getByText("MY_TEST_TODO");
        expect(testTodoElement).toBeInTheDocument();
        removeTodo();
        expect(testTodoElement).not.toBeInTheDocument();

    });



    test('Add To do And update it', () => {
        render(<App />);
        addTodo("MY_TEST_TODO");
        const testTodoElement = screen.getByText("MY_TEST_TODO")
        expect(testTodoElement).toBeInTheDocument();
        updateTodo("Complete")
        const newTagElement = screen.getByText("COMPLETED")
        expect(newTagElement).toBeInTheDocument();
    });


    test('Add To do And update it twice', () => {
        render(<App />);
        addTodo("MY_TEST_TODO");
        const testTodoElement = screen.getByText("MY_TEST_TODO")
        expect(testTodoElement).toBeInTheDocument();
        updateTodo("Complete")
        const completeTagElement = screen.getByText("COMPLETED")
        expect(completeTagElement).toBeInTheDocument();

        updateTodo("Reopen")
        const newTagElement = screen.getByText("NEW")
        expect(newTagElement).toBeInTheDocument();

    });



    test('Add duplicate todo', () => {
        render(<App />);

        addTodo("MY_TEST_TODO");
        addTodo("MY_TEST_TODO");

        const alertElement = screen.getByText("To do : MY_TEST_TODO already present")
        expect(alertElement).toBeInTheDocument();

    });


    test('Add duplicate todo with different cases', () => {
        render(<App />);

        addTodo("MY_TEST_TODO");
        addTodo("my_test_todo");

        const alertElement = screen.getByText("To do : my_test_todo already present")
        expect(alertElement).toBeInTheDocument();

    });



    test('Add duplicate todo and close alert', () => {
        render(<App />);

        addTodo("MY_TEST_TODO");
        addTodo("MY_TEST_TODO");
        const alertElement = screen.getByText("To do : MY_TEST_TODO already present")
        expect(alertElement).toBeInTheDocument();
        const closeButton = screen.getByLabelText("Close alert")
        fireEvent.click(closeButton);

        expect(alertElement).not.toBeInTheDocument();
    });




    test('Add duplicate todo get error and then add new non-duplicate todo', () => {
        render(<App />);

        addTodo("MY_TEST_TODO");
        addTodo("MY_TEST_TODO");
        const alertElement = screen.getByText("To do : MY_TEST_TODO already present")
        expect(alertElement).toBeInTheDocument();
        addTodo("MY_TEST_TODO_1");
        expect(alertElement).not.toBeInTheDocument();
        const testTodoElement = screen.getByText("MY_TEST_TODO_1")
        expect(testTodoElement).toBeInTheDocument();
    });




});




