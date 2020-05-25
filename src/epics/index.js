import { combineEpics } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { ofType  } from 'redux-observable';
import { fullfilledAnalysis } from '../actions/index.js'
import { requestObservable } from './request'

const fetchAnalysisEpic = action$ => action$.pipe(
  ofType('FETCH_ANALYSIS'),
  requestObservable(
    action => ajax.getJSON(`//34.72.189.22/analysis?text=${action.text}`),
    response => fullfilledAnalysis(response)
  )
);

export const rootEpic = combineEpics(
  fetchAnalysisEpic
);