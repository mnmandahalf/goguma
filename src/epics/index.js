import { combineEpics } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { ofType  } from 'redux-observable';
import { fulfilledUser, fullfilledAnalysis } from '../actions/index.js'
import { requestObservable } from './request'
import { mergeMap } from 'rxjs/operators'
import { auth } from "../firebase.js";

const fetchAnalysisEpic = action$ => action$.pipe(
  ofType('FETCH_ANALYSIS'),
  requestObservable(
    action => ajax.getJSON(`https://yukkuri-konlpy-api.com/analysis?text=${action.text}`),
    response => fullfilledAnalysis(response)
  )
);

const fetchUserEpic = action$ => action$.pipe(
  ofType('FETCH_USER'),
    mergeMap((_) =>
      auth.onAuthStateChanged(),
      user => fulfilledUser(user))
);

export const rootEpic = combineEpics(
  fetchAnalysisEpic,
);
