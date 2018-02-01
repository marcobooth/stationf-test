import { FETCH_COMPANY } from '../actions/types'

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_COMPANY:
      return action.payload || null
    default:
      return state;
  }
}
