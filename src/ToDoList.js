import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ToDoForm from "./ToDoForm";
import ToDo from "./ToDo";
import "./styles/ToDoList.css";

function ToDoList() {
  const dispatch = useDispatch();
  const toDos = useSelector((state) => state.toDos);

  function handleCreate(task) {
    dispatch({ type: "ADD_TODO", task });
  }

  function handleDelete(id) {
    dispatch({ type: "DELETE_TODO", id });
  }

  return (
    <div className="ToDoList">
      <ToDoForm createToDo={handleCreate} />
      <ul>
        {toDos.map((toDo) => (
          <ToDo
            deleteToDo={handleDelete}
            id={toDo.id}
            key={toDo.id}
            task={toDo.task}
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
