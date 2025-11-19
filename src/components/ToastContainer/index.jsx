import Toast from "@/components/Toast";
import { useSelector } from "@/libs/react-redux";

export default function ToastContainer() {
    const toastList = useSelector((state) => state.toasts);

    return (
        <div className="toast-container">
            {toastList.map((toast) => (
                <Toast key={toast.id} toast={toast} />
            ))}
        </div>
    );
}
