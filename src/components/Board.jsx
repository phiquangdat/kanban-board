import Card from "./Card";
import { useState } from "react";

export default function Board({ listName }) {
  const [items, setItems] = useState([]); // State for tasks

  return (
    <div className="list">
      <h3>{listName}</h3>
      <ul>
        {items.map((item, index) => (
          <Card key={index}>{item}</Card> // Render each task inside a <Card />
        ))}
      </ul>
    </div>
  );
}
