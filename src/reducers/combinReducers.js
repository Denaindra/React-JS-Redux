import { combineReducers } from 'redux'
import isLogged from './isLogged'
import counter from './counter'

export default combineReducers({
    isLogged,
    counter
  })

