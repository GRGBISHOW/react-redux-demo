import { combineReducers } from "redux";
import addTodo from "./todo-reducers";
import listReducer from "./user-reducers";
const allReducers = combineReducers({
  todoList: addTodo,
  userList: listReducer("UserData"),
  colorList: listReducer("ColorList")
});

export default allReducers;
