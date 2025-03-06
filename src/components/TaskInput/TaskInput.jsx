// TaskInput.jsx
import React from "react";
import "./TaskInput.css";
function TaskInput({ value, onChange, onAddTask }) {
  return (
    <div class="task-input-container">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Enter a new task"
      />
      <button id="add-task" onClick={onAddTask}>
        Add Task
      </button>
    </div>
  );
}

export default TaskInput;
