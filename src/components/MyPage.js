import React from 'react';
import { Grid, Box, Card } from '@material-ui/core';
import { Header } from './Header.js';
import { RightColumn } from './RightColumn'
import classes from './Tokens.module.css'
import { useDatabase, useFetchData } from '../hooks/database.js';
import { useSelector } from 'react-redux';

const sampleTokens = [
  {token: "오늘", romanized: "oneul", word_class: "一般名詞", translation: "今日では"},
  {token: "은", romanized: "eun", word_class: "終助詞", translation: "は"},
  {token: "좋", romanized: "jo", word_class: "形容詞", translation: "よく"},
  {token: "은", romanized: "eun", word_class: "語尾", translation: "は"},
  {token: "날씨", romanized: "nalssi", word_class: "一般名詞", translation: "天候"},
  {token: "이", romanized: "i", word_class: "格助詞（が）", translation: "これは"},
  {token: "네요", romanized: "neyo", word_class: "語尾", translation: "ね"}
]

export const MyPage = () => {
  const authUser = useSelector(state => state.firebase.auth);
  const ref = useDatabase();
  const { data } = useFetchData(ref, authUser.uid);
  const items = data && Object.values(data);
  return items ? (
    <>
      <Header />
      <Box mt={2}/>
      <Grid container spacing={3}>
        <Grid item lg={2} />
        <Grid item lg={6}>
          <Box mt={4}/>
          {
            items.map((item, index) =>
              <Card variant="outlined" key={item.token + index} className={classes.tokenBlock}>
                <div className={classes.tokenSmall}>{item.romanized}</div>
                <div>{item.token}</div>
                <div className={classes.tokenSmall}>{item.word_class}</div>
                <div className={classes.tokenSmall}>{item.translation}</div>
              </Card>)
          }
        </Grid>
        <Grid item lg={3}>
          <RightColumn />
        </Grid>
      </Grid>
    </>
  ) : null;
}
