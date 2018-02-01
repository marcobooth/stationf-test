import { combineReducers } from 'redux';
import authReducer from './authReducer';
import companyReducer from './companyReducer'
import postedJobReducer from './postedJobReducer'
import jobReducer from './jobReducer'

export default combineReducers({
  auth: authReducer,
  company: companyReducer,
  postedJobs: postedJobReducer,
  jobs: jobReducer
})
