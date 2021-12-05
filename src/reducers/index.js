import { combineReducers } from 'redux';

const initialState = {
  analysis: {
    text: null,
    romanized: null,
    translation: null,
    tokens: []
  }
}
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESET_ANALYSIS':
      return initialState
    case 'FULLFILLED_ANALYSIS':
      return {
        ...state,
        analysis: action.payload.analysis
      }
    case 'REQUEST_START':
    case 'REQUEST_SUCCESS':
    case 'REQUEST_FAILURE':
      return {
        ...state,
        status: action.payload.status
      }
    case 'FULFILLED_USER':
      return {
        ...state,
        user: action.payload.user
      }
    default: {
      return state
    }
  }
}

export const rootReducer = combineReducers({
  reducer
})