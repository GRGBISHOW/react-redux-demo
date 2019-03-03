export const ADD_TODO = "ADD_TODO";

export const addTodo = todo_item => {
  return {
    type: ADD_TODO,
    payload: todo_item
  };
};
