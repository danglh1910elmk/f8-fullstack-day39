import {
    ADD_TOAST,
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO,
    REMOVE_TOAST,
    TOGGLE_TODO,
} from "./constants";

const initialState = {
    todos: JSON.parse(localStorage.getItem("todos")) ?? [], // {id, title, isCompleted}
    toasts: [], // {id, message, type}
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [action.payload, ...state.todos],
            };
        case EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload.id
                        ? { ...todo, title: action.payload.title }
                        : todo
                ),
            };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload.id
                        ? { ...todo, isCompleted: !todo.isCompleted }
                        : todo
                ),
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(
                    (todo) => todo.id !== action.payload.id
                ),
            };
        case ADD_TOAST:
            return {
                ...state,
                toasts: [action.payload, ...state.toasts],
            };
        case REMOVE_TOAST:
            return {
                ...state,
                toasts: state.toasts.filter(
                    (toast) => toast.id !== action.payload.id
                ),
            };
        default:
            return state;
    }
}
