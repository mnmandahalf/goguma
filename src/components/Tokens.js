import React from 'react';
import { Card } from '@material-ui/core';
import classes from './Tokens.module.css'

export const Tokens = ({ tokens }) => (
 <div className={classes.tokens}>
  {
    tokens.map(item =>
      <Card variant="outlined" key={item.token} className={classes.tokenBlock}>
        <div className={classes.tokenSmall}>{item.romanized}</div>
        <div>{item.token}</div>
        <div className={classes.tokenSmall}>{item.word_class}</div>
        <div className={classes.tokenSmall}>{item.translation}</div>
      </Card>)
  }
 </div>
)