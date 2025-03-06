// BoardTitle.jsx
import React from "react";

function BoardTitle({ title, isEditing, onTitleChange, onToggleEdit }) {
  return (
    <div id="boardTitleContainer" onClick={onToggleEdit}>
      {isEditing ? (
        <input
          id="boardTitleInput"
          type="text"
          value={title}
          onChange={onTitleChange}
          onBlur={onToggleEdit}
          autoFocus
        />
      ) : (
        <h2>
          {title}
          <i style={{ fontSize: "24px" }} className="fa fa-pencil"></i>
        </h2>
      )}
    </div>
  );
}

export default BoardTitle;
