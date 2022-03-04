
const register = (firstName, lastName, email, mobile, password) => async (dispatch) => {
  dispatch({
    type: 'USER_REGISTER_REQUEST',
    payload: { firstName, lastName, email, mobile, password },
  });
  try {
    dispatch({ type: 'USER_REGISTER_SUCCESS', payload: { firstName, lastName, email, mobile, password } });
  } catch (error) {
    dispatch({
      type: 'USER_REGISTER_FAIL',
    });
  }
};




export { register };
