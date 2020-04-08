import React from 'react';
import { useSelector } from 'react-redux'

export const AnalysisResultArea = () => {
  const result = useSelector(state => state.analysis)
  return (
    <p>
      <span>結果：</span>
      <span>{result}</span>
    </p>
  )
}