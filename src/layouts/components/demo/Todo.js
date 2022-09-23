import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { addTodo, moveTodo } from "./redux-toolkit/todoSlice";
import "./Todo.scss";

function Todo() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const handleAddTodo = () => {
    // redux toolkit
    let action = addTodo({
      id: uuidv4(),
      name: todo,
    });
    dispatch(action);
    setTodo("");
  };

  const handleRemoveTodo = (element) => {
    const action = moveTodo(element.id);
    dispatch(action);
  };

  return (
    <div className="components">
      <div className="title">
        <h3>TODO APP</h3>
      </div>

      <div>
        <h3>List Todo</h3>
        <ul>
          {todos.map((ele) => (
            <li key={ele.id} onClick={() => handleRemoveTodo(ele)}>
              {ele.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="filter-gr">
        <label>Add Todo</label>
        <input value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button onClick={handleAddTodo}>Add</button>
      </div>
    </div>
  );
}

export default Todo;
