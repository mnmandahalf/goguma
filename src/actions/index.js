export const fetchUser = () => (
  {
    type: 'FETCH_USER'
  }
)

export const fulfilledUser = (user) => (
  {
    type: 'FULLFILLED_USER',
    payload: {
      user: user
    }
  }
)

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
export const requestStart = () => ({
  type: 'REQUEST_START',
  payload: {
    status: 'REQUEST'
  }
})

export const requestSuccess = () => ({
  type: 'REQUEST_SUCCESS',
  payload: {
    status: 'SUCCESS'
  }
})

export const requestFailure = () => ({
  type: 'REQUEST_FAILURE', 
  payload: {
    status: 'FAILURE'
  }
})