import { ADD_TODO } from "../actions/index";
const INITIAL_STATE = {
  items: [
    { title: "Go to Market", status: true },
    { title: "Hit the Gym", status: true },
    {
      title: "Learn Python",
      status: false
    }
  ]
};

const addTodo = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        items: [...state.items, { title: action.payload, status: false }]
      };
    default:
      return state;
  }
};

export default addTodo;
