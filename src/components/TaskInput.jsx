// TaskInput.jsx
import React from "react";

function TaskInput({ value, onChange, onAddTask }) {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Enter a new task"
      />
      <button onClick={onAddTask}>Add Task</button>
    </div>
  );
}

export default TaskInput;
