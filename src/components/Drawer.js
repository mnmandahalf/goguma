import React, { useState } from 'react'
import { SwipeableDrawer, List, ListItem, Link, Typography } from '@material-ui/core';
import { auth } from "../firebase.js";

export const Drawer = ({ open, onClose, onOpen}) => {
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [authUser, setAuthUser] = useState()
  auth.onAuthStateChanged((user) => {
    if (user) {
      setIsSignedIn(true)
      setAuthUser(user)
    } else {
      setIsSignedIn(false)
    }
  });
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