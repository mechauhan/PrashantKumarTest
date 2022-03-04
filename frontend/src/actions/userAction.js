import axios from './network';
const register = (info) => async (dispatch) => {
  dispatch({
    type: 'USER_REGISTER_REQUEST',
    payload: {},
  });
  try {
    let data = new FormData();
    data.append('name', info.name);
    data.append('image', info.image);
    data.append('mobile', info.mobile);
    data.append('email', info.email);
    data.append('dob', info.DOB);
    data.append('jobType', info.jobType);
    let { data } = await axios.post('/adduser', data);

    dispatch({
      type: 'USER_REGISTER_SUCCESS',
      payload: data,
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
