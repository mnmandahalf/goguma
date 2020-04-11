import React from 'react';
import { useSelector } from 'react-redux'

export const AnalysisResultArea = () => {
  const result = useSelector(state => state.analysis)
  return (
    <p>
      <span>結果：</span>
      <p>{result.text}</p>
      <p>{result.romanized}</p>
      <p>{result.translation}</p>
      {
        result.tokens.map(item =>
          <div key={item.token}>
            <p>{item.token}</p>
            <p>{item.romanized}</p>
            <p>{item.translation}</p>
            <p>{item.translation}</p>
          </div>
        )
      }
    </p>
  )
}