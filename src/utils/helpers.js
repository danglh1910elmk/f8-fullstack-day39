export function saveToLocalStorage(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
}
