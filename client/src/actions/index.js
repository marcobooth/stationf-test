import axios from 'axios';
import { FETCH_USER, SOMETHING } from './types';

export const something = function() {
  return {type: SOMETHING};
}

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  // console.log("auth", res.data);

  dispatch({ type: FETCH_USER, payload: res.data });
};
