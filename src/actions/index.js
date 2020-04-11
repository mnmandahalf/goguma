export const resetAnalysis = () => (
  {
    type: 'RESET_ANALYSIS'
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