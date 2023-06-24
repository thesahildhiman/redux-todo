import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "../actions";
const Todo = () => {
  const [input, setInput] = useState("");
  const handleTodo = (e) => {
    setInput(e.target.value);
  };
  const handleAddTodo = () => {
    input.trim().length > 0 && dispatch(addTodo(input));
    setInput("");
  };
  const handleDeleteTodo = (idx) => {
    dispatch(deleteTodo(idx));
  };
  const todos = useSelector((state) => state.AddDeleteReducer);
  const dispatch = useDispatch();
  console.log("comp todos----", todos);
  console.warn(input);
  return (
    <>
      <div>
        <h1>Todo List</h1>
        <div>
          <input
            type="text"
            name="todo_input_box"
            id=""
            onChange={(e) => handleTodo(e)}
            value={input}
          />
          <button type="button" onClick={handleAddTodo}>
            Add
          </button>
        </div>
        <div>
          {todos?.length > 0 ? (
            <ul style={{ listStyleType: "none" }}>
              {todos.map((item, idx) => {
                return (
                  <li key={idx}>
                    <span>
                      {item}
                      {item.length > 0 && (
                        <button
                          style={{ color: "red", fontSize: "10px" }}
                          onClick={() => handleDeleteTodo(idx)}
                        >
                          X
                        </button>
                      )}
                    </span>
                  </li>
                );
              })}
            </ul>
          ) : (
            <span style={{ color: "red" }}>No items to show</span>
          )}
        </div>
      </div>
    </>
  );
};

export default Todo;
