import * as React from 'react'
import { List, ListItem, ListItemText, Link } from '@material-ui/core';
import classes from './RightColumn.module.css'

export const RightColumn = () => (
  <List>
    <ListItem>
      <ListItemText primary="このサイトについて" secondary="yukkuri（ゆっくり）は、
        韓国語テキストを日本語に翻訳、ルビ振り、品詞分解して解析するWebツールです。
        単に翻訳するだけでなく、トークンをひとつひとつ読みながら意味を理解することで、
        より確かな知識を身に着けることを目的として作られました。
        気になる文章をフォームに入力して、韓国語の勉強に役立てましょう！" />
    </ListItem>
    <ListItem>
      <ListItemText primary="お問い合わせ" />
    </ListItem>
    <List>
      <ListItem className={classes.links}>
        <Link href="http://mnmandahalf.hatenablog.com/">管理人ブログ</Link>
      </ListItem>
    </List>
  </List>
)