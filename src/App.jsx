import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import TodoApp from "@/pages/TodoApp";
import NotFound from "@/pages/NotFound";

function App() {
    return (
        <BrowserRouter basename="/f8-fullstack-day39">
            <Routes>
                <Route index element={<TodoApp />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
