import {
  REQUEST_INIT,
  REQUEST_SUCCESS,
  REQUEST_FAILURE
} from "../actions/user-data";

const INITIAL_STATE = {
  isLoading: false,
  isCompleted: false,
  items: [],
  error: null
};

const listReducer = listName => {
  return (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case `REQUEST_INIT_${listName}`:
        return { ...state, isLoading: true, isCompleted: false };
      case `REQUEST_SUCCESS_${listName}`:
        return {
          ...state,
          isLoading: false,
          isCompleted: true,
          items: action.payload
        };
      case `REQUEST_FAILURE_${listName}`:
        return {
          ...state,
          isLoading: false,
          isCompleted: true,
          error: action.payload
        };
      default:
        return state;
    }
  };
};

export default listReducer;
