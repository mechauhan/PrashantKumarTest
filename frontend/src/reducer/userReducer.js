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

function getUsersReducer(state = { userInfo: [] }, action) {
  switch (action.type) {
    case 'GET_USERs_REQUEST':
      return { loading: true };
    case 'GET_USERs_SUCCESS':
      return { loading: false, userInfo: action.payload };
    case 'GET_USERs_FAIL':
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export { registerReducer, getUsersReducer };
