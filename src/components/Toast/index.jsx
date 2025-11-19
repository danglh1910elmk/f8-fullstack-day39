import { useEffect } from "react";
import { useDispatch } from "@/libs/react-redux";
import { REMOVE_TOAST } from "@/store/constants";
import { useState } from "react";

export default function Toast({ toast, duration = 2500 }) {
    const [isClosing, setIsClosing] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        const closeId = setTimeout(() => {
            setIsClosing(true);
        }, duration);

        return () => {
            clearTimeout(closeId);
        };
    }, [duration]);

    useEffect(() => {
        const removeId = setTimeout(() => {
            dispatch({ type: REMOVE_TOAST, payload: { id: toast.id } });
        }, duration + 700); // + animation duration

        return () => {
            clearTimeout(removeId);
        };
    }, [dispatch, duration, toast.id]);

    return (
        <div
            className={`toast ${
                toast.type === "success" ? "success" : "error"
            } ${isClosing ? "closing" : ""}`}
        >
            <p className="toast-content">{toast.message}</p>
        </div>
    );
}
