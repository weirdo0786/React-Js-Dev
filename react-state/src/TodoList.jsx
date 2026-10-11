import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function TodoList() {
    let [todos, setTodos] = useState([{ task: "Sample Task", id: uuidv4() }]);
   let [newTodo, setNewTodo] = useState("");

let addNewTask = () => {
    setTodos([...todos, { task: newTodo, id: uuidv4() }]);
    setNewTodo("");
};

let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
};

return (
    <div className="todo-list">
        <input
            placeholder="Add a new task"
            value={newTodo}
            onChange={updateTodoValue}
        />

        <br />

        <button onClick={addNewTask}>Add</button>

        <h3>Todo List</h3>

        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>{todo.task}</li>
            ))}
        </ul>
    </div>
);
}