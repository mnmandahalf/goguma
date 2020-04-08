const initialState = ''
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_INPUT_TEXT':
      return action.value
    default: {
      return state
    }
  }
}

export default reducer