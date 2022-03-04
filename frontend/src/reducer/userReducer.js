function registerReducer(state = { userInfo: [] }, action) {
  switch (action.type) {
    case 'USER_REGISTER_REQUEST':
      return { loading: true };
    case 'USER_REGISTER_SUCCESS':
      return { loading: false, userInfo: action.payload };
    case 'USER_REGISTER_FAIL':
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function getUsersReducer(state = { list: [] }, action) {
  switch (action.type) {
    case 'GET_USERS_REQUEST':
      return { loading: true };
    case 'GET_USERS_SUCCESS':
      return { loading: false, list: action.payload };
    case 'GET_USERS_FAIL':
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function removeUserReducer(state = { list: [] }, action) {
  switch (action.type) {
    case 'DELETE_USER_REQUEST':
      return { loading: true };
    case 'DELETE_USER_SUCCESS':
      return { loading: false, list: action.payload };
    case 'DELETE_USER_FAIL':
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export { registerReducer, getUsersReducer, removeUserReducer };
