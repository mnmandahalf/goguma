export const saveInputText = (value) => (
  {
    type: 'SAVE_INPUT_TEXT',
    value
  }
)

export const fetchAnalysis = (text) => (
  {
    type: 'FETCH_ANALYSIS',
    text: text
  }
)

export const fullfilledAnalysis = (response) => (
  {
    type: 'FULLFILLED_ANALYSIS',
    payload: {
      analysis: response
    }
  }
)