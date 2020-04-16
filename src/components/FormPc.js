import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { fetchAnalysis, resetAnalysis } from '../actions/index.js'
import { TextField, Button } from '@material-ui/core';
import classes from './Form.module.css'

export const FormPc = ({ handleChange, inputText, invalidTextLength,  handleClickAnalize, handleClickReset }) => {
  return (
    <div className={classes.form}>
      <TextField
        placeholder="韓国語のテキストを入力 （例）오늘은 좋은 날씨 네요."
        onChange={handleChange}
        value={inputText}
        multiline={true}
        className={classes.inputText}
        error={invalidTextLength()}
        helperText={invalidTextLength() ? "文字数制限（500字）を超えています" : ""}
      />
      <Button
        onClick={handleClickAnalize}
        size="medium"
        variant="contained"
        color="primary">
        解析する
      </Button>
      <Button
        onClick={handleClickReset}
        size="medium"
        variant="contained">
        リセット
      </Button>
    </div>
  )
}