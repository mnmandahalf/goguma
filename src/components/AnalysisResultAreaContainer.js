import * as React from 'react'
import { useSelector } from 'react-redux'
import { AnalysisResultArea } from './AnalysisResultArea'

export const AnalysisResultAreaContainer = () => {
  const result = useSelector(state => state.analysisReducer.analysis)
  const status = useSelector(state => state.analysisReducer.status)
  return <AnalysisResultArea result={result} isRequesting={status === "REQUEST"}/>
}