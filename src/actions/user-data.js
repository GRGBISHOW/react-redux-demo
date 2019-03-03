export const REQUEST_INIT = "REQUEST_INIT";
export const REQUEST_SUCCESS = "REQUEST_SUCCESS";
export const REQUEST_FAILURE = "REQUEST_FAILURE";

export const initRequest = () => {
  return {
    type: REQUEST_INIT,
    payload: null
  };
};

export const recieveResponse = response => {
  return {
    type: REQUEST_SUCCESS,
    payload: response
  };
};

export const parseError = err => {
  return {
    type: REQUEST_FAILURE,
    payload: err
  };
};
