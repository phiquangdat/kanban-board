import Card from "./Card";
import { useState } from "react";

export default function Board({ listName }) {
  const [items, setItems] = useState([]); // State for tasks
  const [newTask, setNewTask] = useState(""); // State for the input field

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }

  function handleAddTask() {
    if (newTask.trim() !== "") {
      setItems([...items, newTask]); // Add the new task to the items array
      setNewTask(""); // Clear the input field
    }
  }

  return (
    <div className="list">
      <h3>{listName}</h3>
      <ul>
        {items.map((item, index) => (
          <Card key={index}>{item}</Card> // Render each task inside a <Card />
        ))}
      </ul>
      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        placeholder="Enter a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}
