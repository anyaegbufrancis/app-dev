import { combineReducers } from 'redux'
import {
  TOGGLE,
  HANDLE_OPEN_NAV,
  HANDLE_OPEN_USER,
  PAGE_NAME
} from './actions'


const initialState = {
  toggled: true,
  handleopennav: true,
  handleopenuser: false,
  pagename: "Babygirl"
}


const changeState = (state = initialState, action) => {

  switch (action.type) {
      case TOGGLE:
      return {
        ...state, 
        toggled: action.payload
      }

      case HANDLE_OPEN_NAV:
        return {
          ... state,
          handleopennav: action.payload
        }

      case HANDLE_OPEN_USER:
        return {
          ... state,
          handleopenuser: action.payload
        }

        case PAGE_NAME:
          return {
            ... state,
            pagename: action.payload
          }

    default:
      return state

  }
}

const rootReducer = combineReducers({
  changeState
})

export default rootReducer
