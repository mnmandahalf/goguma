import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { fetchAnalysis } from '../actions/index.js'
import { Input, Button } from '@material-ui/core';

export const Form = () => {
  const [inputText, setInputText] = useState('')
  const handleChange = (event) => setInputText(event.target.value)
  const dispatch = useDispatch()
  const handleClick = () => {
    if (!inputText) return
    dispatch(fetchAnalysis(inputText))
  }

  return (
    <p>
      <Input type="text"
        placeholder="テキストを入力"
        onChange={handleChange}
        value={inputText}
        multiline={true}
      />
      <Button onClick={handleClick} variant="contained" color="primary">解析する</Button>
    </p>
  )
}