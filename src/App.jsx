import { useState } from "react";
import Board from "./components/Board";
import "./App.css";

function App() {
  const [boardTitle, setBoardTitle] = useState("My Board");
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [backlog, setBacklog] = useState(["Task 1", "Task 2"]); // Initial Backlog tasks

  function handleTitleChange(e) {
    setBoardTitle(e.target.value);
  }

  function toggleTitleEdit() {
    setIsEditingTitle(!isEditingTitle);
  }

  return (
    <>
      <div id="boardTitleContainer" onClick={toggleTitleEdit}>
        {isEditingTitle ? (
          <input
            id="boardTitleInput"
            type="text"
            value={boardTitle}
            onChange={handleTitleChange}
            onBlur={toggleTitleEdit}
            autoFocus
          />
        ) : (
          <h2>
            {boardTitle}
            <i style={{ fontSize: "24px" }} className="fa fa-pencil"></i>
          </h2>
        )}
      </div>
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
