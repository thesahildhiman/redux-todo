export const addTodo = (text) => {
  console.log("-----action---", text);
  return {
    type: "ADD",
    payload: text,
  };
};

export const deleteTodo = (idx) => {
  return {
    type: "DELETE",
    payload: idx,
  };
};
