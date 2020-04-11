import React from 'react';
import { useSelector } from 'react-redux'
import classes from './AnalysisResultArea.module.css'
import { Paper } from '@material-ui/core';

export const AnalysisResultArea = () => {
  const result = useSelector(state => state.analysis)
  if (!result.text) return null
  return (
    <Paper>
      <span>結果</span>
      <p>{result.text}</p>
      <p>{result.romanized}</p>
      <p>{result.translation}</p>
      <div className={classes.tokens}>
        {
          result.tokens.map(item =>
            <div key={item.token} className={classes.tokenBlock}>
              <div className={classes.tokenItem}>{item.token}</div>
              <div className={classes.tokenSmall}>{item.romanized}</div>
              <div className={classes.tokenItem}>{item.translation}</div>
              <div className={classes.tokenSmall}>{item.word_class}</div>
            </div>
          )
        }
      </div>
    </Paper>
  )
}