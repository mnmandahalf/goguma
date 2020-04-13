import * as React from 'react'
import { useSelector } from 'react-redux'
import { AnalysisResultArea } from './AnalysisResultArea'

export const AnalysisResultAreaContainer = () => {
  const result = useSelector(state => state.analysis)
  const status = useSelector(state => state.status)
  return <AnalysisResultArea result={result} isRequesting={status === "REQUEST"}/>
}