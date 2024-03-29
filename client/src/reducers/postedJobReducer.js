import { FETCH_POSTED_JOBS } from '../actions/types';

export default function(state = null, action) {
  // console.log("action type: ", action.type)
  switch (action.type) {
    case FETCH_POSTED_JOBS:
      return action.payload || false;
    default:
      return state;
  }
}
