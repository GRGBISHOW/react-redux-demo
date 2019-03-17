export const REQUEST_INIT = "REQUEST_INIT";
export const REQUEST_SUCCESS = "REQUEST_SUCCESS";
export const REQUEST_FAILURE = "REQUEST_FAILURE";

export const initRequest = module => {
  return {
    type: `REQUEST_INIT_${module}`,
    payload: null
  };
};

export const requestSuccess = (module, response) => {
  return {
    type: `REQUEST_SUCCESS_${module}`,
    payload: response
  };
};

export const requestFailure = (module, err) => {
  return {
    type: `REQUEST_FAILURE_${module}`,
    payload: err
  };
};

export const fetchUserData = () => {
  return dispatch => {
    dispatch(initRequest("UserData"));
    fetch("https://reqres.in/api/users?page=2")
      .then(handleErrors)
      .then(response => response.json())
      .then(r => dispatch(requestSuccess("UserData", r.data)))
      .catch(err => dispatch(requestFailure("UserData", err)));
  };
};

export const fetchColorData = () => {
  return dispatch => {
    dispatch(initRequest("ColorList"));
    fetch("https://reqres.in/api/unknown")
      .then(handleErrors)
      .then(response => response.json())
      .then(r => dispatch(requestSuccess("ColorList", r.data)))
      .catch(err => dispatch(requestFailure("ColorList", err)));
  };
};

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
