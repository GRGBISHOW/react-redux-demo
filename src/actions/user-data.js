export const REQUEST_INIT = "REQUEST_INIT";
export const REQUEST_SUCCESS = "REQUEST_SUCCESS";
export const REQUEST_FAILURE = "REQUEST_FAILURE";

export const initRequest = () => {
  return {
    type: REQUEST_INIT,
    payload: null
  };
};

export const requestSuccess = response => {
  return {
    type: REQUEST_SUCCESS,
    payload: response
  };
};

export const requestFailure = err => {
  return {
    type: REQUEST_FAILURE,
    payload: err
  };
};

export const fetchUserData = () => {
  return dispatch => {
    dispatch(initRequest());
    fetch("https://reqres.in/api/users?page=2")
      .then(handleErrors)
      .then(response => response.json())
      .then(r => dispatch(requestSuccess(r.data)))
      .catch(err => dispatch(requestFailure(err)));
  };
};

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
