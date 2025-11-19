import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";
import ToastContainer from "@/components/ToastContainer";

export default function TodoApp() {
    return (
        <div className="app-container">
            <h1 className="page-heading">Todo App</h1>

            <TodoForm />

            <TodoList />

            <ToastContainer />
        </div>
    );
}
