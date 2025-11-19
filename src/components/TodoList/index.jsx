import { useSelector } from "@/libs/react-redux";
import TodoItem from "@/components/TodoItem";

export default function TodoList() {
    const todos = useSelector((state) => state.todos);

    return (
        <ul id="task-list" className="task-list">
            {!todos.length ? (
                <li>Your todo list is empty</li>
            ) : (
                todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
            )}
        </ul>
    );
}
