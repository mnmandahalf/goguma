import React from 'react';
import classes from './AnalysisResultArea.module.css'
import { Card } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import { Tokens } from './Tokens'

export const AnalysisResultArea = ({ result, isRequesting }) => {
  return (
    <Card variant="outlined">
      <div className={classes.resultArea}>
        <span>日本語訳</span>
        <p>
          {!isRequesting ?
            (
              !result.translation ?
              <div className={classes.example}>今日はいい天気ですね。</div> :
              <div>{result.translation}</div>
            ) : (
              <div>
                <Skeleton />
                <Skeleton />
              </div>
            )
          }
        </p>
        <span>発音</span>
        <p>
          {!isRequesting ?
            (
              !result.romanized ?
                <div className={classes.example}>oneureun jo-eun nalssi neyo.</div> :
                <div>{result.romanized}</div>
            ) : (
              <div>
                <Skeleton />
                <Skeleton />
              </div>
            )
          }
        </p>
        <span>品詞分解</span>
        <p>
          <div>
            <Tokens tokens={result.tokens} isRequesting={isRequesting} />
          </div>
        </p>
      </div>
    </Card>
  )
}