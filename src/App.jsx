import { useState } from "react";
import Board from "./components/Board";
import "./App.css";

function App() {
  const [boardName, setBoardName] = useState("My Board");
  const [isEditing, setIsEditing] = useState(false);

  function handleChangeName(e) {
    setBoardName(e.target.value);
  }

  function toggleEdit() {
    setIsEditing(!isEditing);
  }

  return (
    <>
      <div id="boardNameContainer" onClick={toggleEdit}>
        {isEditing ? (
          <input
            id="boardNameInput"
            type="text"
            value={boardName}
            onChange={handleChangeName}
            onBlur={toggleEdit}
            autoFocus
          />
        ) : (
          <h2>{boardName}</h2>
        )}
      </div>
      <Board listName="To Do" />
      <Board listName="In Progress" />
      <Board listName="Done" />
    </>
  );
}

export default App;
