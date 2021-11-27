import React from 'react'
import { SwipeableDrawer, List, ListItem, Link } from '@material-ui/core';

export const Drawer = ({ open, onClose, onOpen}) => {
  return (
    <SwipeableDrawer
      open={open}
      onClose={onClose}
      onOpen={onOpen}
    >
      <div style={{width: 300}}>
        <List>
          <ListItem>
            <Link href="/">ホーム</Link>
          </ListItem>
          <ListItem>
            <Link href="/sign_up">ユーザー登録</Link>
          </ListItem>
          <ListItem>
            <Link href="/sign_in">ログイン</Link>
          </ListItem>
          <List>
            <ListItem>
              <Link href="http://mnmandahalf.hatenablog.com/">お問い合わせは管理人ブログへ</Link>
            </ListItem>
          </List>
        </List>
      </div>
    </SwipeableDrawer>
  )
}