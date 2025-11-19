import { useDispatch } from "@/libs/react-redux";
import { DELETE_TODO } from "@/store/constants";
import { saveToLocalStorage } from "@/utils/helpers";
import store from "@/store";

export default function ConfirmModal({ todo, setShowModal }) {
    const dispatch = useDispatch();

    const closeModal = () => {
        setShowModal(false);
    };

    const handleCancel = () => {
        closeModal();
    };

    const handleConfirm = () => {
        dispatch({ type: DELETE_TODO, payload: { id: todo.id } });
        saveToLocalStorage(store.getState().todos);

        closeModal();
    };

    const handleModalClick = () => {
        closeModal();
    };

    return (
        <div className="modal" onClick={handleModalClick}>
            <div
                className="modal-container"
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className="modal-header">
                    <p className="modal-heading">{`Are you sure you want to delete "${todo.title}" todo?`}</p>
                </div>
                <div className="modal-footer">
                    <button
                        className="modal-cancel modal-btn"
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
                    <button
                        className="modal-confirm modal-btn"
                        onClick={handleConfirm}
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
}
