import React from 'react';
import classes from './AnalysisResultArea.module.css'
import { Card } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import { Tokens } from './Tokens'

export const AnalysisResultArea = ({ result, isRequesting }) => {
  return (
    <Card variant="outlined" className={classes.resultArea}>
      <span>日本語訳</span>
      {!isRequesting ?
        (
          !result.translation ?
          <p className={classes.example}>今日はいい天気ですね。</p> :
          <p>{result.translation}</p>
        ) : (
          <p>
            <Skeleton />
            <Skeleton />
          </p>
        )
      }
      <span>発音</span>
      {!isRequesting ?
        (
          !result.romanized ?
            <p className={classes.example}>oneureun jo-eun nalssi neyo.</p> :
            <p>{result.romanized}</p>
        ) : (
          <p>
            <Skeleton />
            <Skeleton />
          </p>
        )
      }
      <span>品詞分解</span>
      <p>
        <Tokens tokens={result.tokens} isRequesting={isRequesting} />
      </p>
    </Card>
  )
}