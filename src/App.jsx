import { useState, useEffect } from "react";
import Board from "./components/Board";
import "./App.css";

function App() {
  const [boardTitle, setBoardTitle] = useState("My Board");
  const [isEditingTitle, setIsEditingTitle] = useState(false);

  function handleTitleChange(e) {
    setBoardTitle(e.target.value);
  }

  function toggleTitleEdit() {
    setIsEditingTitle(!isEditingTitle);
  }

  useEffect(() => {
    if (isEditingTitle) {
      document.getElementById("boardTitleInput").focus();
    }
  }, [isEditingTitle]);

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
        <Board className="list" listName="To Do" />
        <Board className="list" listName="In Progress" />
        <Board className="list" listName="Done" />
      </div>
    </>
  );
}

export default App;
