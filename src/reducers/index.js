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
    default: {
      return state
    }
  }
}

export const rootReducer = combineReducers({
  reducer
})