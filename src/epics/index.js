import { combineEpics } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { ofType  } from 'redux-observable';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { fullfilledAnalysis } from '../actions/index.js'

const fetchAnalysisEpic = action$ => action$.pipe(
  ofType('FETCH_ANALYSIS'),
  mergeMap(action =>
    ajax.getJSON(`https://korean-analyze-api.herokuapp.com//analyze?text=${action.text}`).pipe(
      map(response => fullfilledAnalysis(response)),
      catchError(error => console.log(error.xhr.response))
    ) 
  )
);

export const rootEpic = combineEpics(
  fetchAnalysisEpic
);