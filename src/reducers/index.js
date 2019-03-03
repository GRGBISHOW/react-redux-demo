import { combineReducers } from "redux";
import addTodo from "./todo-reducers";
import userData from "./user-reducers";
const allReducers = combineReducers({
  todoList: addTodo,
  userList: userData
});

export default allReducers;
