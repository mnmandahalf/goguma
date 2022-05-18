import { ajax } from 'rxjs/ajax';
import { combineEpics, ofType  } from 'redux-observable';
import { fullfilledAnalysis } from '../actions/index.js'
import { requestObservable } from './request'

const fetchAnalysisEpic = action$ => action$.pipe(
  ofType('FETCH_ANALYSIS'),
  requestObservable(
    action => ajax.getJSON(`https://django-konlpy-api-wbc37rju4a-uc.a.run.app/analysis?text=${action.text}`),
    response => fullfilledAnalysis(response)
  )
);

export const rootEpic = combineEpics(
  fetchAnalysisEpic,
);
