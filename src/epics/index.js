import { combineEpics } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { ofType  } from 'redux-observable';
import { fullfilledAnalysis } from '../actions/index.js'
import { requestObservable } from './request'

const fetchAnalysisEpic = action$ => action$.pipe(
  ofType('FETCH_ANALYSIS'),
  requestObservable(
    action => ajax.getJSON(`http://35.211.129.214:8000/analysis?text=${action.text}`),
    response => fullfilledAnalysis(response)
  )
);

export const rootEpic = combineEpics(
  fetchAnalysisEpic
);