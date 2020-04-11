import React from 'react';
import { useSelector } from 'react-redux'
import classes from './AnalysisResultArea.module.css'
import { Card } from '@material-ui/core';
const sampleTokens = [
  {token: "오늘", romanized: "oneul", word_class: "一般名詞", translation: "今日では"},
  {token: "은", romanized: "eun", word_class: "終助詞", translation: "は"},
  {token: "좋", romanized: "jo", word_class: "形容詞", translation: "よく"},
  {token: "은", romanized: "nalssi", word_class: "語尾", translation: "は"},
  {token: "날씨", romanized: "oneul", word_class: "一般名詞", translation: "天候"},
  {token: "이", romanized: "i", word_class: "格助詞（が）", translation: "これは"},
  {token: "네요", romanized: "neyo", word_class: "語尾", translation: "ね"}
]
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
      <div className={classes.tokens}>
        {
          result.tokens.length === 0 ?
          (sampleTokens.map(item =>
            <Card variant="outlined" key={item.token} className={`${classes.tokenBlock} ${classes.example}`}>
              <div className={classes.tokenSmall}>{item.romanized}</div>
              <div className={classes.tokenItem}>{item.token}</div>
              <div className={classes.tokenSmall}>{item.word_class}</div>
              <div className={classes.tokenSmall}>{item.translation}</div>
            </Card>)
          ) :
          (result.tokens.map(item =>
            <Card variant="outlined" key={item.token} className={classes.tokenBlock}>
              <div className={classes.tokenSmall}>{item.romanized}</div>
              <div className={classes.tokenItem}>{item.token}</div>
              <div className={classes.tokenSmall}>{item.word_class}</div>
              <div className={classes.tokenSmall}>{item.translation}</div>
            </Card>)
          )
        }
      </div>
    </Card>
  )
}