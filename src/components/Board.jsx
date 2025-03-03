import List from "./List";
import Card from "./Card";
import { useState } from "react";
export default function Board({ listName }) {
  const [item, setItem] = useState("");

  function handleClick(e) {}
  return (
    <div className="list">
      <h3>{listName}</h3>
      <ul>
        <Card>{item}</Card>
        <button onClick={handleClick}>Add Task</button>
      </ul>
    </div>
  );
}
