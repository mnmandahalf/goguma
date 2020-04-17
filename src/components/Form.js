import React from 'react';
import { Box, Grid, TextField, Button } from '@material-ui/core';
import classes from './Form.module.css'

export const Form = ({ handleChange, inputText, invalidTextLength, handleClickAnalize, handleClickReset }) => {
  return (
    <>
      <p className={classes.formText}>
      解析したい韓国語のテキストを以下のテキストフィールドに入力もしくはコピー＆ペーストを行い、「解析する」ボタンをクリックすると、下部のエリアに結果が表示されます。
      </p>
      <TextField
        placeholder="韓国語のテキストを入力 （例）오늘은 좋은 날씨 네요."
        onChange={handleChange}
        value={inputText}
        multiline={true}
        rows={6}
        variant="outlined"
        error={invalidTextLength()}
        helperText={invalidTextLength() ? "文字数制限（500字）を超えています" : ""}
        fullWidth
      />
      <Box mt={2}/>
      <Grid container spacing={1}>
        <Grid item lg={3} xs={6}>
          <Button
            onClick={handleClickAnalize}
            fullWidth
            size="large"
            variant="contained"
            color="primary">
            解析する
          </Button>
        </Grid>
        <Grid item lg={3} xs={6}>
          <Button
            onClick={handleClickReset}
            fullWidth
            size="large"
            variant="contained">
            リセット
          </Button>
        </Grid>
      </Grid>
    </>
  )
}