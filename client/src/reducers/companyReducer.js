import { FETCH_COMPANIES } from '../actions/types'

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_COMPANIES:
      return action.payload || false;
    default:
      return state;
  }
}
