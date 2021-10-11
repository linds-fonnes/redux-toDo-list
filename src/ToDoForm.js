import React, { useState } from "react";

function ToDoForm({ createToDo }) {
  const [toDo, setToDo] = useState("");

  function handleChange(evt) {
    setToDo(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    createToDo(toDo);
    setToDo("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="toDo">To Do: </label>
        <input
          name="toDo"
          id="toDo"
          type="text"
          onChange={handleChange}
          value={toDo}
        />
        <button>Add to List</button>
      </form>
    </div>
  );
}

export default ToDoForm;
