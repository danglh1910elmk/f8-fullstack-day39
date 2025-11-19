import { useRef, useState } from "react";
import { useDispatch, useSelector } from "@/libs/react-redux";
import { ADD_TOAST, ADD_TODO } from "@/store/constants";
import { saveToLocalStorage } from "@/utils/helpers";
import store from "@/store";

export default function TodoForm() {
    const [input, setInput] = useState("");
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    const todos = useSelector((state) => state.todos);

    // check duplication
    const checkDuplicated = (title) => {
        return todos.some(
            (todo) => todo.title.toLowerCase() === title.toLowerCase()
        );
    };

    const checkEmptyOrDuplicated = (title) => {
        if (!title) {
            dispatch({
                type: ADD_TOAST,
                payload: {
                    id: String(Date.now() + Math.random()),
                    message: "Please enter a todo item!",
                    type: "error",
                },
            });
            return true;
        }

        if (checkDuplicated(title)) {
            dispatch({
                type: ADD_TOAST,
                payload: {
                    id: String(Date.now() + Math.random()),
                    message: `"${title}" is already in your todo list!`,
                    type: "error",
                },
            });
            return true;
        }

        return false;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTitle = input.trim();

        if (checkEmptyOrDuplicated(newTitle)) {
            inputRef.current.focus();
            return;
        }

        const newTodo = {
            id: String(Date.now()),
            title: newTitle,
            isCompleted: false,
        };

        // add new todo
        dispatch({
            type: ADD_TODO,
            payload: newTodo,
        });

        saveToLocalStorage(store.getState().todos);

        // clear
        setInput("");
        // focus
        inputRef.current.focus();
    };

    return (
        <form action="" className="todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                ref={inputRef}
                className="input"
                placeholder="Enter your todo..."
                spellCheck="false"
                value={input}
                onChange={(e) => {
                    setInput(e.target.value);
                }}
            />

            <button type="submit" className="submit-btn">
                Add Todo
            </button>
        </form>
    );
}
