import { v4 as uuidv4 } from "uuid";

const INITIAL_STATE = { toDos: [] };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        toDos: [...state.toDos, { task: action.task, id: uuidv4() }],
      };
    case "DELETE_TODO":
      return {
        ...state,
        toDos: state.toDos.filter((toDo) => toDo.id !== action.id),
      };
    default:
      return state;
  }
}

export default rootReducer;
