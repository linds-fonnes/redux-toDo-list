import React from "react";
import "./styles/ToDo.css";

function ToDo({ task, deleteToDo, id }) {
  console.log(task);
  function handleDelete() {
    deleteToDo(id);
  }

  return (
    <div className="ToDo">
      <li className="ToDo-task">{task}</li>
      <button onClick={handleDelete} className="ToDo-button">
        X
      </button>
    </div>
  );
}

export default ToDo;
