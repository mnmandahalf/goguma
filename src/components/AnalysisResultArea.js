import React from 'react';
import { useSelector } from 'react-redux'
import classes from './AnalysisResultArea.module.css'
import { Card } from '@material-ui/core'
import { Tokens } from './Tokens'

export const AnalysisResultArea = () => {
  const result = useSelector(state => state.analysis)
  return (
    <Card variant="outlined" className={classes.resultArea}>
      <span>日本語訳</span>
      {!result.translation ?
        <p className={classes.example}>今日はいい天気ですね。</p> :
        <p>{result.translation}</p>
      }
      <span>発音</span>
      {
        !result.romanized ?
          <p className={classes.example}>oneureun jo-eun nalssi neyo.</p> :
          <p>{result.romanized}</p>
      }
      <span>品詞分解</span>
      <p>
        <Tokens tokens={result.tokens} />
      </p>
    </Card>
  )
}