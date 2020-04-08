import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { saveInputText } from './actions/action'

export const Form = () => {
  const [inputText, setInputText] = useState('')
  const handleChange = (event) => setInputText(event.target.value)
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(saveInputText(inputText))
  }

  return (
    <p>
      <input type="text"
        placeholder="テキストを入力"
        onChange={handleChange}
        value={inputText}
      />
      <button onClick={handleClick}>解析する</button>
    </p>
  )
}