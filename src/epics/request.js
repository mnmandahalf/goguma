import { of, from, concat } from 'rxjs'
import { mergeMap, catchError, concatMap } from 'rxjs/operators'
import { requestStart, requestSuccess, requestFailure } from '../actions/index'

export const requestObservable = (apiRequest, fulfilledAction) =>
  mergeMap(action =>
    concat(
      of(requestStart()),
      from(apiRequest(action)).pipe(
        concatMap(payload => [requestSuccess(), fulfilledAction(payload)]),
        catchError((error) => {
          console.log(error.xhr.response)
          return of(requestFailure())
        })
      )
    )
  )