import { useState } from "react";
import { useDispatch } from "@/libs/react-redux";
import { ADD_TOAST, EDIT_TODO, TOGGLE_TODO } from "@/store/constants";
import ConfirmModal from "@/components/ConfirmModal";
import { saveToLocalStorage } from "@/utils/helpers";
import store from "@/store";

export default function TodoItem({ todo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [todoTitle, setTodoTitle] = useState("");
    const [showModal, setShowModal] = useState(false);

    const dispatch = useDispatch();

    const handleToggle = () => {
        // toggle complete state
        dispatch({ type: TOGGLE_TODO, payload: { id: todo.id } });
        saveToLocalStorage(store.getState().todos);
    };

    const handleDelete = () => {
        setShowModal(true);
    };

    const handleSaveEdit = () => {
        const newTodoTitle = todoTitle;

        // empty title
        if (!newTodoTitle) {
            dispatch({
                type: ADD_TOAST,
                payload: {
                    id: String(Date.now() + Math.random()),
                    message: "Please enter a todo item!",
                    type: "success",
                },
            });
            return;
        }

        // same title
        if (newTodoTitle === todo.title) {
            setIsEditing(false);
            return;
        }

        // update todo
        dispatch({
            type: EDIT_TODO,
            payload: { id: todo.id, title: newTodoTitle },
        });

        saveToLocalStorage(store.getState().todos);

        setIsEditing(false);
    };

    const handleEdit = () => {
        // click SAVE
        if (isEditing) {
            handleSaveEdit();
        }
        // click EDIT
        else {
            setTodoTitle(todo.title);
            setIsEditing(true);
        }
    };

    const handleInputKeydown = (e) => {
        if (e.key === "Enter") {
            handleSaveEdit();
        } else if (e.key === "Escape") {
            setTodoTitle(todo.title);
            setIsEditing(false);
        }
    };

    return (
        <>
            <li className={`task-item ${todo.isCompleted ? "completed" : ""}`}>
                <span className="task-title">
                    {isEditing ? (
                        <input
                            id="edit-input"
                            className="edit-input"
                            value={todoTitle}
                            onChange={(e) => {
                                setTodoTitle(e.target.value);
                            }}
                            onKeyDown={handleInputKeydown}
                            autoFocus
                        />
                    ) : (
                        todo.title
                    )}
                </span>

                <div className="task-action">
                    <button className="task-btn edit" onClick={handleEdit}>
                        {isEditing ? "Save" : "Edit"}
                    </button>
                    <button className="task-btn done" onClick={handleToggle}>
                        {todo.isCompleted ? "Mark as undone" : "Mark as done"}
                    </button>
                    <button className="task-btn delete" onClick={handleDelete}>
                        Delete
                    </button>
                </div>
            </li>

            {showModal && (
                <ConfirmModal todo={todo} setShowModal={setShowModal} />
            )}
        </>
    );
}
