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
    case 'SAVE_INPUT_TEXT':
      return action.value
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