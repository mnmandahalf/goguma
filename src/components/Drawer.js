import React from 'react'
import { SwipeableDrawer, List, ListItem, Link, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { getUser } from '../selectors/UserSelector.js';

export const Drawer = ({ open, onClose, onOpen}) => {
  const authUser = useSelector(state => getUser(state));
  const isSignedIn = !!authUser;
  return (
    <SwipeableDrawer
      open={open}
      onClose={onClose}
      onOpen={onOpen}
    >
      <div style={{width: 300}}>
        <List>
          {
            isSignedIn &&
            <ListItem>
              <Typography variant="h6">{authUser && authUser.email}さん</Typography>
            </ListItem>
          }
          <ListItem>
            <Link href="/">ホーム</Link>
          </ListItem>
          {
            !isSignedIn &&
            <ListItem>
              <Link href="/sign_in">ログイン</Link>
            </ListItem>
          }
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