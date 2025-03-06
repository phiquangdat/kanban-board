import Card from "./Card";

export default function Board({ listName, tasks }) {
  return (
    <div className="list">
      <h3>{listName}</h3>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((item, index) => (
            <Card key={index}>{item}</Card>
          ))}
        </ul>
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  );
}
