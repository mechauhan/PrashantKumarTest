import axios from './network';
const register = (info) => async (dispatch) => {
  dispatch({
    type: 'USER_REGISTER_REQUEST',
    payload: {},
  });
  try {
    let datad = new FormData();
    datad.append('name', info.name);
    datad.append('image', info.image);
    datad.append('mobile', info.mobile);
    datad.append('email', info.email);
    datad.append('dob', info.DOB);
    datad.append('jobType', info.jobType);
    let { data } = await axios.post('/adduser', datad);

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
