// App.jsx
import { useState } from "react";
import BoardTitle from "./components/BoardTitle";
import TaskInput from "./components/TaskInput/TaskInput";
import Board from "./components/Board";
import "./App.css";

function App() {
  const [boardTitle, setBoardTitle] = useState("My Board");
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [backlog, setBacklog] = useState(["Task 1", "Task 2"]);
  const [newTask, setNewTask] = useState("");

  function handleTitleChange(e) {
    setBoardTitle(e.target.value);
  }

  function toggleTitleEdit() {
    setIsEditingTitle(!isEditingTitle);
  }

  function handleAddTask() {
    if (newTask.trim() !== "") {
      setBacklog([...backlog, newTask]); // Fixed the original bug (was using undefined 'items')
      setNewTask("");
    }
  }

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }

  return (
    <>
      <BoardTitle
        title={boardTitle}
        isEditing={isEditingTitle}
        onTitleChange={handleTitleChange}
        onToggleEdit={toggleTitleEdit}
      />
      <TaskInput
        value={newTask}
        onChange={handleInputChange}
        onAddTask={handleAddTask}
      />
      <div id="list-container">
        <Board className="list backlog" listName="Backlog" tasks={backlog} />
        <Board className="list" listName="To Do" tasks={["Example Task A"]} />
        <Board
          className="list"
          listName="In Progress"
          tasks={["Example Task B"]}
        />
        <Board className="list" listName="Done" tasks={["Example Task C"]} />
      </div>
    </>
  );
}

export default App;
