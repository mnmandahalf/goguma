import React from 'react';
import { Card } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab'
import classes from './Tokens.module.css'

const sampleTokens = [
  {token: "오늘", romanized: "oneul", word_class: "一般名詞", translation: "今日では"},
  {token: "은", romanized: "eun", word_class: "終助詞", translation: "は"},
  {token: "좋", romanized: "jo", word_class: "形容詞", translation: "よく"},
  {token: "은", romanized: "eun", word_class: "語尾", translation: "は"},
  {token: "날씨", romanized: "nalssi", word_class: "一般名詞", translation: "天候"},
  {token: "이", romanized: "i", word_class: "格助詞（が）", translation: "これは"},
  {token: "네요", romanized: "neyo", word_class: "語尾", translation: "ね"}
]

export const Tokens = ({ tokens, isRequesting }) => {
  const isSample = tokens.length === 0
  const items = !isSample ? tokens : sampleTokens
  const className = `${isSample ? classes.sample : ""}`
  const classNameSmall = `${classes.tokenSmall} ${isSample ? classes.sample : ""}`
  const handleClick = () => {

  }
  return (
    <div className={classes.tokens}>
      {!isRequesting ? (
        items.map((item, index) =>
          <Card variant="outlined" key={item.token + index} className={classes.tokenBlock} onClick={handleClick}>
            <div className={classNameSmall}>{item.romanized}</div>
            <div className={className}>{item.token}</div>
            <div className={classNameSmall}>{item.word_class}</div>
            <div className={classNameSmall}>{item.translation}</div>
          </Card>)
        ) : (
          <>
            <Skeleton variant="rect" className={classes.tokenBlock} height={80} />
            <Skeleton variant="rect" className={classes.tokenBlock} height={80} />
            <Skeleton variant="rect" className={classes.tokenBlock} height={80} />
            <Skeleton variant="rect" className={classes.tokenBlock} height={80} />
            <Skeleton variant="rect" className={classes.tokenBlock} height={80} />
          </>
        )
      }
    </div>
  )
}