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
const getUser = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_INIT:
      return { ...state, isLoading: true, isCompleted: false };
    case REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isCompleted: true,
        items: action.payload
      };
    case REQUEST_FAILURE:
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

export default getUser;
