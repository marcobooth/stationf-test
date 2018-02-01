import axios from 'axios';
import { FETCH_USER, FETCH_COMPANY, FETCH_POSTED_JOBS, FETCH_JOBS } from './types';

export const fetchJobs = () => async dispatch => {
  const res = await axios.get('/api/jobs')

  dispatch({ type: FETCH_JOBS, payload: res.data })
}

export const fetchPostedJobs = () => async dispatch => {
  const res = await axios.get('/api/posted_jobs')

  dispatch({ type: FETCH_POSTED_JOBS, payload: res.data })
}

export const fetchCompany = () => async dispatch => {
  const res = await axios.get('/api/company')

  dispatch({ type: FETCH_COMPANY, payload: res.data })
}

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/auth/current_user')
  // console.log("auth", res.data);

  dispatch({ type: FETCH_USER, payload: res.data })
};
