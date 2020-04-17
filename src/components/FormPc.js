import React from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import classes from './Form.module.css'

export const FormPc = ({ handleChange, inputText, invalidTextLength,  handleClickAnalize, handleClickReset }) => {
  return (
    <Grid container spacing={1}>
      <Grid item lg={8}>
        <TextField
          placeholder="韓国語のテキストを入力 （例）오늘은 좋은 날씨 네요."
          onChange={handleChange}
          value={inputText}
          multiline={true}
          className={classes.inputText}
          error={invalidTextLength()}
          helperText={invalidTextLength() ? "文字数制限（500字）を超えています" : ""}
          fullWidth
        />
      </Grid>
      <Grid item lg={2}>
        <Button
          fullWidth
          onClick={handleClickAnalize}
          size="medium"
          variant="contained"
          color="primary">
          解析する
        </Button>
      </Grid>
      <Grid item lg={2}>
        <Button
          fullWidth
          onClick={handleClickReset}
          size="medium"
          variant="contained">
          リセット
        </Button>
      </Grid>
    </Grid>
  )
}