import axios from './network';
const register =
  (firstName, lastName, email, mobile, password) => async (dispatch) => {
    dispatch({
      type: 'USER_REGISTER_REQUEST',
      payload: { firstName, lastName, email, mobile, password },
    });
    try {
      dispatch({
        type: 'USER_REGISTER_SUCCESS',
        payload: { firstName, lastName, email, mobile, password },
      });
    } catch (error) {
      dispatch({
        type: 'USER_REGISTER_FAIL',
      });
    }
  };

const getUsers = () => async (dispatch, getState) => {
  dispatch({
    type: 'GET_USERS_REQUEST',
    payload: {},
  });
  try {
    let { data } = await axios.get('/getusers');
    dispatch({
      type: 'GET_USERS_SUCCESS',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'GET_USERS_FAIL',
    });
  }
};

export { register, getUsers };
