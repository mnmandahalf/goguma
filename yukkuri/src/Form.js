import React, { useState } from 'react';

export const Form = () => {
  const [inputText, setInputText] = useState('')
  const handleChange = (event) => setInputText(event.target.value)
  return (
    <p>
      <input type="text"
        placeholder="テキストを入力"
        onChange={handleChange}
        value={inputText}
      />
      <button onClick={()=>{console.log(inputText)}}>解析する</button>
    </p>
  )
}