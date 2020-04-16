import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { fetchAnalysis, resetAnalysis } from '../actions/index.js'
import { FormPc } from './FormPc'
import { FormSp } from './FormSp'

export const FormContainer = ({ isPC }) => {
  const [inputText, setInputText] = useState('')
  const handleChange = (event) => setInputText(event.target.value)
  const dispatch = useDispatch()
  const handleClickAnalize = () => {
    if (!inputText || invalidTextLength()) return
    dispatch(fetchAnalysis(inputText))
  }
  const handleClickReset = () => {
    dispatch(resetAnalysis())
    setInputText("")
  }
  const invalidTextLength = () => inputText.length > 500

  const formProps = {
    inputText: inputText,
    handleChange: handleChange,
    handleClickAnalize: handleClickAnalize,
    handleClickReset: handleClickReset,
    invalidTextLength: invalidTextLength
  }

  if(isPC) {
    return <FormPc {...formProps} />
  }
  return <FormSp {...formProps} />
}